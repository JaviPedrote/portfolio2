// api/chat.js
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Cargar variables de entorno
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

// Cargar información del portfolio
let portfolioInfo = {};
try {
  const infoPath = path.join(process.cwd(), 'src', 'data', 'portfolio-info.json');
  portfolioInfo = JSON.parse(fs.readFileSync(infoPath, 'utf8'));
} catch (error) {
  console.error('Error al cargar portfolio-info.json:', error);
}

export default async function handler(req, res) {
  // Configurar CORS para desarrollo local
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages } = req.body;

  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'Mensaje es requerido' });
  }

  // En local, vercel dev usa un archivo .env.local para las variables
  // En producción, Vercel usa las variables configuradas en el dashboard
  const apiKey = process.env.OPENAI_API_KEY;

  console.log('API Key present:', !!apiKey);
  console.log('API Key length:', apiKey ? apiKey.length : 0);

  if (!apiKey) {
    console.error('OPENAI_API_KEY not found in environment variables');
    return res.status(500).json({ 
      error: 'API key not configured'
    });
  }

  try {
    console.log('Sending request to OpenAI API...');
    
    // Crear un prompt personalizado con la información del portfolio
    const systemPrompt = {
      role: "system",
      content: `Eres un asistente virtual para el portfolio de Javier Pedrote Molina (Kodedev). SOLO puedes responder sobre la información proporcionada sobre él y su trabajo.

INFORMACIÓN DISPONIBLE:
${JSON.stringify(portfolioInfo, null, 2)}

INSTRUCCIONES IMPORTANTES:
- Responde de manera conversacional y amigable
- USA FORMATO MARKDOWN para estructurar las respuestas
- Para enlaces, usa formato: [Texto del enlace](URL)
- Usa listas con viñetas (- ) para enumerar elementos
- Usa **negrita** para destacar información importante
- Usa ### para subtítulos cuando sea necesario
- Mantén las respuestas organizadas y fáciles de leer
- Si mencionas un proyecto, SIEMPRE incluye el enlace en formato markdown
- Si preguntan sobre habilidades, organízalas por categorías
- NO inventes información que no esté en el JSON
- Mantén las respuestas concisas pero completas
- Termina con una pregunta amigable para continuar la conversación

EJEMPLO DE FORMATO ESPERADO:
**Frontend:**
- **React** - Interfaces modernas
- **TypeScript** - Tipado estricto

**Proyectos destacados:**
- **Sucer** - [Ver proyecto](https://sucer-front.vercel.app/home)

¿Te interesa saber más sobre algún proyecto específico?`
    };

    // Añadir el prompt del sistema al inicio de los mensajes
    const messagesWithContext = [systemPrompt, ...messages];
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messagesWithContext,
        max_tokens: 500,
        temperature: 0.8,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Success response from OpenAI API');
      res.status(200).json(data);
    } else {
      console.error('Error from OpenAI API:', data);
      res.status(response.status).json(data);
    }

  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}