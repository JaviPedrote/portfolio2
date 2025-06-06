import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Bloquea el scroll al abrir el menú móvil
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  // Detecta el scroll para cambiar el estilo del navbar y calcular el progreso
  useEffect(() => {
    const handleScroll = () => {
      // Detecta si ha habido scroll para cambiar el estilo
      setScrolled(window.scrollY > 20);
      
      // Calcula el progreso del scroll para la barra de progreso
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#home" },
    { label: "Proyectos", href: "#projects" },
  ];

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled 
        ? "bg-gray-900/90 backdrop-blur-md shadow-lg shadow-blue-900/10" 
        : "bg-gray-900/70 backdrop-blur-sm"}`}
    >
      {/* Barra de progreso de scroll */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gray-800 w-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600" 
          style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a 
          href="#home" 
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 hover:from-blue-300 hover:via-purple-400 hover:to-indigo-500 transition-all duration-300"
        >
          JP
        </a>

        {/* Links escritorio */}
        <ul className="hidden lg:flex gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          aria-label="Abrir menú"
          className={`lg:hidden p-2 rounded-full ${open 
            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" 
            : "text-blue-400 hover:text-purple-400 transition-colors"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="origin-top lg:hidden"
          >
            <div className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-md border-t border-blue-500/10 px-6 py-6 shadow-lg shadow-blue-900/5">
              <ul className="flex flex-col gap-6">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium transition-all"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
