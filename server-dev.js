import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

// Endpoint del chatbot
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'Mensaje es requerido' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  console.log('API Key found:', !!apiKey);
  console.log('API Key length:', apiKey?.length);

  if (!apiKey) {
    console.error('OPENAI_API_KEY not found');
    return res.status(500).json({ 
      error: 'API key not configured',
      debug: {
        envKeys: Object.keys(process.env).filter(key => key.includes('OPENAI'))
      }
    });
  }

  try {
    console.log('Enviando petición a OpenAI...');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Respuesta exitosa de OpenAI');
      res.json(data);
    } else {
      console.error('Error de OpenAI:', data);
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Error interno:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Servir archivos estáticos desde dist
app.use(express.static(join(__dirname, 'dist')));

// Fallback para SPA
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/api/chat`);
});
