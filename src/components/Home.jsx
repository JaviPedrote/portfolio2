
import Imagen from "../assets/imagen3.webp";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";





function Home() {
  return (
    <section
      id="home"
      className="flex lg:mt-20 lg:pt-0 mb-5 lg:mb-0 lg:flex-row flex-col-reverse justify-center gap-6 lg:gap-0 bg-gray-900"
    >
      <div className="text-center lg:text-left flex-1 space-y-6 mb-14 lg:mb-0 lg:pl-32 mx-3 lg:mr-10">
        <p className="text-lg text-green-500">👋 Hola, soy <span className="text-2xl font-bold">Javier Pedrote Molina</span></p>
        <h1 className="text-3xl lg:text-6xl font-bold text-green-500">
          Frontend Developer.
        </h1>
          <p className="text-lg text-gray-300 animate-fadeIn">
            Apasionado por la creación de experiencias digitales fluidas y atractivas.
          </p>
        <div className="animate-fadeIn">

          <h2 className="text-3xl font-semibold text-white text-left mb-1">Habilidades principales:</h2>
          <ul className="list-disc  text-gray-400 text-lg text-left ml-10">
            <li className="flex items-center"> <div><span className="text-green-500">HTML5</span> y <span className="text-green-500 font-medium">CSS3 </span>: Fundamentos sólidos en maquetación web.</div><FaHtml5 className="text-orange-500 text-xl" /><FaCss3Alt className="text-blue-500 text-xl" /> </li>
            <li className="flex items-center"><div><span className="text-green-500">JavaScript</span> (ES6+): Desarrollo interactivo y dinámico.</div><FaJs className="text-yellow-400 text-xl" /></li>
            <li className="flex items-center"><div><span className="text-green-500">TypeScript</span>: Desarrollo interactivo y dinámico tipado.</div><SiTypescript className="text-blue-600 text-xl" /></li>
            <li className="flex items-center"><div> <span className="text-green-500">Tailwind CSS</span>: Diseño eficiente y componentes reutilizables.</div><SiTailwindcss className="text-teal-400 text-xl" /></li>
            <li className="flex items-center"><div> <span className="text-green-500">React.js</span>: Framework moderno para crear aplicaciones web.</div><FaReact className="text-blue-400 text-xl animate-spin-slow" /></li>
          </ul>

          <p className="text-gray-400 mt-1">
            Con <span className="text-green-500 ">2 años</span> de experiencia académica, me especializo en desarrollar interfaces modernas, funcionales y responsivas.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[50vw] flex-1 flex justify-center">
        <img
          src={Imagen}
          alt="Programador trabajando"
          className=" object-contain w-[70vw] h-[70vw] lg:w-[35vw] lg:h-[35vw] max-h-[500px] max-w-[500px] rounded-[2%] imagen-difuminada"
        />
      </div>

    </section>


  );
}

export default Home;
