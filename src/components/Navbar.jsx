import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";


export function Navbar() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll al abrir el menú móvil
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const links = [
    { label: "Inicio", href: "#home" },
    { label: "Proyectos", href: "#projects" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="text-xl font-bold text-green-500">
          JP
        </a>

        {/* Links escritorio */}
        <ul className="hidden lg:flex gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          aria-label="Abrir menú"
          className="lg:hidden text-green-500"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="origin-top flex flex-col gap-4 bg-gray-800 px-6 pb-6 pt-3 lg:hidden"
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block text-gray-300 hover:text-green-500 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
