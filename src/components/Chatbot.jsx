import { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: '¡Hola! 👋 Soy el asistente virtual de **Javier Pedrote**. Puedo contarte sobre sus proyectos, habilidades y experiencia. ¿Qué te gustaría saber?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para mostrar la burbuja cada 5 segundos
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 2200000); // La burbuja se oculta después de 3 segundos
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  // Preguntas sugeridas
  const suggestedQuestions = [
    "¿Qué proyectos ha desarrollado?",
    "¿Cuáles son sus habilidades técnicas?",
    "¿Qué experiencia tiene?",
    "¿Cómo puedo contactarlo?"
  ];

  const handleSuggestedQuestion = (question) => {
    setInput(question);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData);
        throw new Error(`HTTP error! status: ${response.status} - ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response structure from API');
      }
      
      const assistantMessage = data.choices[0].message;
      setMessages(prevMessages => [...prevMessages, assistantMessage]);

    } catch (error) {
      console.error('Error al contactar con el chatbot:', error);
      
      let errorContent = 'Lo siento, algo salió mal. Por favor, inténtalo de nuevo.';
      
      if (error.message.includes('Failed to fetch')) {
        errorContent = 'Error de conexión. Verifica tu conexión a internet.';
      } else if (error.message.includes('401')) {
        errorContent = 'Error de autenticación con el servicio.';
      } else if (error.message.includes('500')) {
        errorContent = 'Error del servidor. Inténtalo más tarde.';
      }
      
      const errorMessage = { role: 'assistant', content: errorContent };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Burbuja de ayuda */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            className="fixed bottom-18 right-5 sm:bottom-26 sm:right-8 z-40 bg-white rounded-2xl shadow-lg border border-gray-200 p-1 sm:p-3 max-w-35 sm:max-w-48"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [10, -8, 0, -5, 0, -3, 0] // Efecto bounce desde posición inicial
            }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              y: {
                duration: 0.8,
                times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
                ease: "easeOut"
              }
            }}
          >
            <div className="text-xs sm:text-sm text-gray-700 text-center">
              ¿Puedo ayudarte? 😊
            </div>
            <div className="absolute bottom-0 right-3 sm:right-8 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-9 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 group relative" 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={16} className="sm:w-5 sm:h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <FaRobot size={16} className="sm:w-5 sm:h-5" />
                {/* Indicador de pulso */}
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-16 right-2 w-72 h-81 sm:bottom-20 sm:right-6 sm:w-80 sm:h-96 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaRobot size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Asistente de Javier</h3>
                    <p className="text-xs opacity-90">Online ahora</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 h-52 sm:h-64">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md' 
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown 
                          components={{
                            a: ({ href, children }) => (
                              <a 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline font-medium"
                              >
                                {children}
                              </a>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-semibold text-gray-900">{children}</strong>
                            ),
                            h3: ({ children }) => (
                              <h3 className="font-semibold text-gray-900 text-sm mt-2 mb-1">{children}</h3>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-none space-y-1 mt-2">{children}</ul>
                            ),
                            li: ({ children }) => (
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>{children}</span>
                              </li>
                            ),
                            p: ({ children }) => (
                              <p className="mb-2 last:mb-0">{children}</p>
                            )
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Preguntas sugeridas (solo se muestran cuando hay pocos mensajes) */}
              {messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 mt-2"
                >
                  <p className="text-xs text-gray-500 mb-2">Preguntas sugeridas:</p>
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="block w-full text-left p-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-3"
                >
                  <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-0.5 sm:p-2 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregúntame sobre Javier..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane size={12} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
