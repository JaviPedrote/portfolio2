import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    { name: "Proyecto 1", link: "https://enlace-a-proyecto-1.com" },
    { name: "Proyecto 2", link: "https://enlace-a-proyecto-2.com" },
    { name: "Proyecto 3", link: "https://enlace-a-proyecto-3.com" },
  ];

  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50 h-18">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-green-500">Mi Portafolio</div>
        <div className="relative">
          <button
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            Proyectos
          </button>
          {isOpen && (
            <div
              className="absolute bg-gray-700 mt-2 w-40 rounded shadow-lg"
              onMouseLeave={() => setIsOpen(false)}
            >
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  {project.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;