# 🤖 Chatbot Portfolio - Mejoras Implementadas

## ✨ Nuevas Características

### 1. **Información Personalizada** 📊
- El chatbot ahora responde exclusivamente con información sobre Javier Pedrote Molina
- Datos almacenados en `src/data/portfolio-info.json`
- Incluye proyectos, habilidades, experiencia y contacto

### 2. **UI Flotante Moderna** 🎨
- **Botón flotante**: Posicionado en la esquina inferior derecha
- **No interfiere con el layout**: Usa `position: fixed` y alto `z-index`
- **Animaciones suaves**: Transiciones con Framer Motion
- **Indicador de estado**: Punto verde animado cuando está cerrado

### 3. **Experiencia de Usuario Mejorada** 🚀
- **Preguntas sugeridas**: Aparecen cuando se abre por primera vez
- **Animaciones fluidas**: Apertura, cierre y mensajes animados
- **Diseño responsive**: Funciona en móvil y desktop
- **Estados visuales**: Loading, enviando, etc.

### 4. **Características Técnicas** ⚙️

#### Componente Chatbot (`src/components/Chatbot.jsx`):
- **Estado de apertura/cierre**: `useState(false)`
- **Posicionamiento**: `fixed bottom-6 right-6 z-50`
- **Animaciones**: Framer Motion para transiciones
- **Iconos**: React Icons (FaComments, FaTimes, FaPaperPlane)

#### API Mejorada (`api/chat.js`):
- **Prompt del sistema**: Contexto personalizado con tu información
- **Limitación de respuestas**: Solo responde sobre tu portfolio
- **Carga de datos**: Lee automáticamente `portfolio-info.json`

## 🎯 Funcionalidades

### Preguntas que puede responder:
- ✅ "¿Qué proyectos ha desarrollado?"
- ✅ "¿Cuáles son sus habilidades técnicas?"
- ✅ "¿Qué experiencia tiene?"
- ✅ "¿Cómo puedo contactarlo?"
- ✅ Información sobre tecnologías específicas
- ✅ Detalles de proyectos con enlaces

### Lo que NO hará:
- ❌ Responder preguntas generales no relacionadas contigo
- ❌ Inventar información que no esté en el JSON
- ❌ Ayudar con temas fuera de tu portfolio

## 🛠 Estructura de Archivos

```
src/
├── components/
│   ├── Chatbot.jsx          # Nuevo componente flotante
│   ├── Home.jsx             # Sin chatbot integrado
│   └── ...
├── data/
│   └── portfolio-info.json  # Tu información personalizada
└── App.jsx                  # Chatbot añadido aquí

api/
└── chat.js                  # API mejorada con contexto personal
```

## 🎨 Diseño Visual

### Colores:
- **Botón**: Gradiente azul-púrpura (`from-blue-500 to-purple-600`)
- **Mensajes usuario**: Mismo gradiente
- **Mensajes bot**: Fondo blanco con bordes suaves
- **Header**: Gradiente de marca

### Animaciones:
- **Entrada del botón**: Aparece después de 2s con spring animation
- **Apertura del chat**: Scale + fade con spring
- **Mensajes**: Aparecen con delay escalonado
- **Hover effects**: Scale en botones

## 🚀 Cómo Usar

1. **El usuario ve el botón flotante** en la esquina inferior derecha
2. **Al hacer clic**, se abre la ventana de chat
3. **Puede usar preguntas sugeridas** o escribir libremente
4. **El bot responde solo con tu información** profesional
5. **Se puede cerrar** haciendo clic en la X o el botón principal

## 📱 Responsive Design

- **Desktop**: Ventana de 320px de ancho, posicionada a la derecha
- **Mobile**: Se adapta automáticamente, mantiene usabilidad
- **Z-index alto**: Siempre visible sobre otros elementos

## 🔧 Configuración Técnica

### Variables de entorno necesarias:
```bash
DEEPSEEK_API_KEY=tu_api_key_aqui
```

### Dependencias nuevas:
- `framer-motion` (ya instalada)
- `react-icons` (ya instalada)

¡El chatbot ahora es tu asistente personal profesional! 🎉
