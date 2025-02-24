
import Imagen from "../assets/imagen3.webp";



function Home() {
  return (
    <section
      id="home"
      className="flex pt-40 lg:pt-0 mt-20 mb-5 lg:mb-0 lg:flex-row flex-col-reverse justify-center gap-6 lg:gap-0 bg-gray-900 outline"
    >
      <div className="text-center lg:text-left flex-1 space-y-6 mb-14 lg:mb-0 lg:pl-32 mx-10 lg:mr-10">
        <p className="text-lg text-green-500">👋 Hola, soy <span className="text-2xl font-bold">Javier Pedrote Molina</span></p>
        <h1 className="text-3xl lg:text-5xl font-bold text-green-500">
          Frontend Developer.
        </h1>


        <h2 className="text-3xl font-semibold text-white text-left">Habilidades principales:</h2>
        <ul className="list-disc  text-gray-400 text-lg text-left ml-10">
          <li><span className="text-green-500">HTML5</span> y <span className="text-green-500 font-medium">CSS3</span>: Fundamentos sólidos en maquetación web.</li>
          <li><span className="text-green-500">JavaScript</span> (ES6+): Desarrollo interactivo y dinámico.</li>
          <li><span className="text-green-500">Tailwind CSS</span>: Diseño eficiente y componentes reutilizables.</li>
          <li><span className="text-green-500">React.js</span> y <span className="text-green-500 font-medium">Vue.js</span>: Frameworks modernos para crear aplicaciones web.</li>
        </ul>

        <p className="text-gray-400">
          Con <span className="text-green-500">2 años</span> de experiencia académica, me especializo en desarrollar interfaces modernas, funcionales y responsivas.
        </p>
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
