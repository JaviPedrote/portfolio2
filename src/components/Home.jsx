import { motion } from "framer-motion";
import heroImg from "../assets/imagen3.webp";

export function Home() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-10 py-16 lg:py-24 bg-gray-900 h-[100vh] lg:mb-0 lg:mt-0 mb-2 mt-4 lg:h-[90vh]"
    >
      {/* Texto */}
      <motion.div
        className="flex-1 space-y-6 px-6 lg:px-20 text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p variants={textVariant} custom={1} className="text-lg text-green-500">
          👋 Hola, soy <span className="font-bold">Javier Pedrote Molina</span>
        </motion.p>
        <motion.h1
          variants={textVariant}
          custom={2}
          className="text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-green-500 leading-tight"
        >
          Front-End Developer
        </motion.h1>
        <motion.p
          variants={textVariant}
          custom={3}
          className="max-w-xl mx-auto lg:mx-0 text-gray-300"
        >
          Apasionado por la creación de experiencias digitales fluidas y atractivas.
        </motion.p>

        <motion.div variants={textVariant} custom={4} className="space-y-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-white">
            Habilidades principales:
          </h2>
          <ul className="list-disc list-inside grid gap-1 text-gray-400 text-sm lg:text-base">
            <li>
              <span className="text-green-500">HTML5</span> &amp;{' '}
              <span className="text-green-500">CSS3</span>: maquetación web.
            </li>
            <li>
              <span className="text-green-500">JavaScript</span> (ES6+): desarrollo
              interactivo.
            </li>
            <li>
              <span className="text-green-500">TypeScript</span>: tipado estricto.
            </li>
            <li>
              <span className="text-green-500">Tailwind CSS</span>: diseño eficiente.
            </li>
            <li>
              <span className="text-green-500">React</span>: interfaces modernas.
            </li>
          </ul>
          <p className="text-gray-400 text-sm lg:text-base">
            Con <span className="text-green-500">2 años</span> de experiencia académica me
            especializo en desarrollar interfaces modernas, responsivas y
            funcionales.
          </p>
        </motion.div>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img
          src={heroImg}
          alt="Programador trabajando"
          className="w-5/6 max-w-[480px] aspect-square object-cover rounded-2xl shadow-lg"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}