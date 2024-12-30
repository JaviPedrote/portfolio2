
import ProgrammerImage from "../assets/programmer.png"; // Cambia esto por el nombre de tu imagen.

function Home() {
  return (
    <section
      id="home"
      className="h-full mt-20 mb-5 flex flex-col lg:flex-row justify-center items-center bg-gray-900"
    >
      <div className="text-center lg:text-left lg:w-1/3 space-y-6 mb-14 lg:mb-0 mx-10 lg:mx-0">
        <p className="text-lg text-green-500">👋 Hola, soy <span className="text-2xl font-bold">Javier Pedrote Molina</span></p>
        <h1 className="text-4xl lg:text-5xl font-bold text-green-500">
          Frontend Developer.
        </h1>
    
        
        <h2 className="text-3xl font-semibold text-white text-left">Habilidades principales:</h2>
        <ul className="list-disc list-inside text-gray-400 text-left ml-10">
          <li><span className="text-green-500 font-medium">HTML5</span> y <span className="text-green-500 font-medium">CSS3</span>: Fundamentos sólidos en maquetación web.</li>
          <li><span className="text-green-500 font-medium">Tailwind CSS</span>: Diseño eficiente y componentes reutilizables.</li>
          <li><span className="text-green-500 font-medium">JavaScript</span> (ES6+): Desarrollo interactivo y dinámico.</li>
          <li><span className="text-green-500 font-medium">React.js</span> y <span className="text-green-500 font-medium">Vue.js</span>: Frameworks modernos para crear aplicaciones web.</li>
        </ul>
        
        <p className="text-gray-400">
        Con <span className="text-green-500">2 años</span> de experiencia académica, me especializo en desarrollar interfaces modernas, funcionales y responsivas.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center rounded-full">
        <img
          src={ProgrammerImage}
          alt="Programador trabajando"
          className="w-[40%] lg:w-[65%] rounded-[2%]"
        />
      </div>
    </section>
  );
}

export default Home;
