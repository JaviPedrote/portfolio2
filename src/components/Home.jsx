import Imagen from "../assets/imagen3.webp";



function Home() {
  return (
    <section
      id="home"
      className="flex lg:mt-20 lg:pt-0  lg:flex-row flex-col-reverse justify-center gap-6 lg:gap-0 bg-gray-900"
    >
   <div className="text-center xl:text-left flex-1 space-y-6 mb-14 xl:mb-0 xl:pl-32 mx-3 xl:mr-10">
  <p className="text-base xl:text-lg text-green-500 animate-fadeInReverse">
    👋 Hola, soy <span className="text-lg xl:text-2xl font-bold">Javier Pedrote Molina</span>
  </p>
  <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-500 animate-fadeInReverse">
    Frontend Developer
  </h1>
  <p className="text-base text-left xl:text-lg text-gray-300 animate-fadeIn mx-6 xl:mx-0">
    Apasionado por la creación de experiencias digitales fluidas y atractivas.
  </p>
  <div className="animate-fadeIn mx-6 xl:mx-0">
    <h2 className="text-xl lg:text-3xl font-semibold text-white text-left mb-1">
      Habilidades principales:
    </h2>
    <ul className="list-disc text-sm xl:text-lg text-gray-400 text-left mx-4">
      <li>
        <span className="text-green-500">HTML5</span> y <span className="text-green-500 font-medium">CSS3</span>: Fundamentos sólidos en maquetación web.
      </li>
      <li>
        <span className="text-green-500">JavaScript</span> (ES6+): Desarrollo interactivo y dinámico.
      </li>
      <li>
        <span className="text-green-500">TypeScript</span>: Desarrollo interactivo y dinámico tipado.
      </li>
      <li>
        <span className="text-green-500">Tailwind CSS</span>: Diseño eficiente y componentes reutilizables.
      </li>
      <li>
        <span className="text-green-500">React.js</span>: Framework moderno para crear aplicaciones web.
      </li>
    </ul>
    <p className="text-gray-400 text-left mt-1 text-sm xl:text-base">
      Con <span className="text-green-500">2 años</span> de experiencia académica, me especializo en desarrollar interfaces modernas, responsivas y funcionales.
    </p>
  </div>
</div>




      <div className="w-full lg:w-[50vw] flex-1 flex justify-center  animate-fadeInReverse">
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
