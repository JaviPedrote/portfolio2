# Solución para el Chatbot

## Problema identificado
Tu chatbot no se conecta bien debido a problemas de configuración entre Vite y las API routes de Vercel.

## Archivos modificados/creados:

### 1. `vercel.json` (NUEVO)
- Configura las funciones serverless para Vercel
- Permite que las rutas `/api/*` funcionen correctamente

### 2. `api/chat.js` (MEJORADO)
- Añadido mejor manejo de errores
- Configuración CORS para desarrollo local
- Logging mejorado para debugging
- Parámetros adicionales para la API de DeepSeek

### 3. `src/components/Chatbot.jsx` (MEJORADO)
- Mejor manejo de errores con mensajes específicos
- Validación de estructura de respuesta
- Mensajes de error más informativos

### 4. `test-api.html` (NUEVO)
- Herramienta para probar la conexión de la API

## Pasos para solucionar:

### 1. Verificar variables de entorno
Tu archivo `.env.local` ya tiene la API key configurada:
```
DEEPSEEK_API_KEY=sk-41acf8f1ee3446eaabe5037ba8e6909b
```

### 2. Para desarrollo local:
```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Ejecutar en modo desarrollo con Vercel
vercel dev
```

### 3. Para pruebas:
1. Ejecuta `vercel dev`
2. Abre `http://localhost:3000/test-api.html`
3. Haz clic en "Probar API" para verificar la conexión

### 4. Para despliegue en producción:
1. Sube los cambios a tu repositorio
2. En el dashboard de Vercel, añade la variable de entorno:
   - `DEEPSEEK_API_KEY` = `sk-41acf8f1ee3446eaabe5037ba8e6909b`

## Posibles errores y soluciones:

### Error 404 en `/api/chat`:
- Asegúrate de ejecutar con `vercel dev` en lugar de `npm run dev`
- Verifica que el archivo `vercel.json` esté en la raíz del proyecto

### Error de CORS:
- Los headers CORS ya están configurados en `api/chat.js`
- Si persiste, verifica que estés usando `vercel dev`

### Error de API Key:
- Verifica que la variable `DEEPSEEK_API_KEY` esté configurada
- En desarrollo: archivo `.env.local`
- En producción: dashboard de Vercel

### Error 401 (No autorizado):
- La API key puede ser inválida o haber expirado
- Genera una nueva API key en DeepSeek

## Comandos útiles:

```bash
# Desarrollo local con Vercel
vercel dev

# Verificar variables de entorno
vercel env ls

# Desplegar a producción
vercel --prod
```

## Notas importantes:
- Usa siempre `vercel dev` para desarrollo local (no `npm run dev`)
- El archivo `.env.local` no se sube al repositorio (está en .gitignore)
- Las variables de entorno en producción se configuran en el dashboard de Vercel
