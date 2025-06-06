import { motion } from "framer-motion";
import "atropos/css";
import Atropos from "atropos/react";
import logo from "../assets/logo.png";
import heroImg from "../assets/imgagen3.png";
import img1 from "../assets/ImgProjecto1.webp";
import img2 from "../assets/imgProjecto2.webp";
import img3 from "../assets/imgProjecto3.webp";
import img4 from "../assets/ImgProjecto4.webp";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    img: img1,
    title: "Sucer",
    text: "Aplicacion para comunicacion entre tutores y alumnos con backend en Laravel con passport y frontend en React",
    link: "https://sucer-front.vercel.app/home",
  },
  {
    img: img2,
    title: "Heroes",
    text: "Aplicación para explorar héroes de Marvel y DC",
    link: "https://heroes-hooks.vercel.app/",
  },
  {
    img: img3,
    title: "Ecommerce",
    text: "Aplicacion de ecommerce",
    link: "https://delicate-jalebi-4f6537.netlify.app/",
  },
  {
    img: img4,
    title: "Propinas",
    text: "Calculadora de propinas desarrollada con TypeScript",
    link: "https://react-propinas-ts.vercel.app/",
  },
];

// Variantes de animación centralizadas
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Home() {
  return (

    <section className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="home">
      {/* Fondo con efecto de partículas/grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#3a3a3a_1px,transparent_1px)] [background-size:20px_20px] opacity-30"
      />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      <div className="mx-auto px-4 flex flex-col items-center justify-between lg:px-6  mt-10 lg:mt-0 lg:py-24 pt-20 w-full">
        {/* Texto */}
        <div>
          <div
            className="relative z-10 [-webkit-mask-image:linear-gradient(90deg,transparent_0%,#000_30%,#000_70%,transparent_100%)]
          [mask-size:200%_100%] [-webkit-mask-size:200%_100%] animate-wipe-x text-6xl font-extrabold mb-6"
          >
            <h1
              className="text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-6xl font-extrabold mb-2 animate-gradient-x[mask-image:linear-gradient(90deg,transparent_0%,#000_80%,#000_150%,transparent_200%)]
          "
            >
              Kodedev
            </h1>
            <motion.h1
              variants={fadeIn}
              custom={2}
              className="text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              <div className="flex justify-center w-full">
                <span className="relative text-center">
                  <span className="relative z-10 text-white bg-clip-text">Full-stack developer</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-70 transform -translate-y-1 hidden lg:block"></span>
                </span>
              </div>
            </motion.h1>
          </div>

          <motion.p
            variants={fadeIn}
            custom={1}
            className="text-lg text-white mb-4 text-center lg:flex lg:items-center lg:justify-center lg:gap-2"
          >
            Soy{" "}
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
              Javier Pedrote Molina 
            </span>
            <span className="text-white inline-block">
              apasionado por la creación de experiencias digitales fluidas y
              atractivas.
            </span>
          </motion.p>

          <motion.p
            variants={fadeIn}
            custom={3}
            className="mx-auto lg:mx-0 text-gray-300 lg:ml-24 text-lg italic"
          >
         
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full lg:h-auto">

        {/* tecnologias*/}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="w-full lg:w-1/2 text-center lg:text-left lg:mt-0"
        >
          <motion.div
            variants={fadeIn}
            custom={4}
            className="space-y-6 mt-10 lg:ml-24 text-left bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Habilidades principales
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800/80 p-3 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all hover:shadow-md hover:shadow-blue-500/20 group">
                <div className="text-blue-400 font-bold mb-1 group-hover:text-blue-300 transition-colors">
                  HTML5 & CSS3
                </div>
                <div className="text-gray-400 text-sm">Maquetación web</div>
              </div>

              <div className="bg-gray-800/80 p-3 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-md hover:shadow-purple-500/20 group">
                <div className="text-purple-400 font-bold mb-1 group-hover:text-purple-300 transition-colors">
                  JavaScript
                </div>
                <div className="text-gray-400 text-sm">
                  Desarrollo interactivo
                </div>
              </div>

              <div className="bg-gray-800/80 p-3 rounded-lg border border-indigo-500/30 hover:border-indigo-500/60 transition-all hover:shadow-md hover:shadow-indigo-500/20 group">
                <div className="text-indigo-400 font-bold mb-1 group-hover:text-indigo-300 transition-colors">
                  TypeScript
                </div>
                <div className="text-gray-400 text-sm">Tipado estricto</div>
              </div>

              <div className="bg-gray-800/80 p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-md hover:shadow-cyan-500/20 group">
                <div className="text-cyan-400 font-bold mb-1 group-hover:text-cyan-300 transition-colors">
                  Tailwind CSS
                </div>
                <div className="text-gray-400 text-sm">Diseño eficiente</div>
              </div>

              <div className="bg-gray-800/80 p-3 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all hover:shadow-md hover:shadow-blue-500/20 group">
                <div className="text-blue-400 font-bold mb-1 group-hover:text-blue-300 transition-colors">
                  React
                </div>
                <div className="text-gray-400 text-sm">Interfaces modernas</div>
              </div>

              <div className="bg-gray-800/80 p-3 rounded-lg border border-red-500/30 hover:border-red-500/60 transition-all hover:shadow-md hover:shadow-red-500/20 group">
                <div className="text-red-400 font-bold mb-1 group-hover:text-red-300 transition-colors">
                  Laravel
                </div>
                <div className="text-gray-400 text-sm">Backend y API REST</div>
              </div>

              <div className="bg-gray-800/80 p-3 rounded-lg border border-orange-500/30 hover:border-orange-500/60 transition-all hover:shadow-md hover:shadow-orange-500/20 group col-span-2 sm:col-span-1">
                <div className="text-orange-400 font-bold mb-1 group-hover:text-orange-300 transition-colors">
                  Git
                </div>
                <div className="text-gray-400 text-sm">
                  Control de versiones
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-base border-t border-gray-700 pt-4 mt-4">
              Con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
                2 años
              </span>{" "}
              de experiencia académica me especializo en desarrollar interfaces
              modernas, responsivas y funcionales.
            </p>
          </motion.div>
        </motion.div>

          {/* Efecto 3D con Atropos - Lado derecho (imagen) */}
          <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center h-full lg:h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[500px] mx-auto">
            <Atropos
              className="w-full h-[450px] lg:h-[600px] rounded-2xl overflow-hidden"
              highlight={false}
              shadow={false}
              rotateXMax={5}
              rotateYMax={5}
              stretchZ={5}
              activeOffset={40}
              alwaysActive={false}
              commonOrigin={true}
              style={{ background: "transparent" }}
            >
              <img
                src={heroImg}
                alt="Fondo de programación"
                className="w-full h-full object-contain absolute inset-0"
                data-atropos-offset="3"
                loading="lazy"
              />
              <img
                src={logo}
                alt="Logo de Kodedev"
                className="absolute top-8 left-8 w-24 h-24 object-contain"
                data-atropos-offset="6"
                loading="lazy"
              />
            </Atropos>
          </div>
        </motion.div>
      </div>

      
      </div>

      {/* PROYECTOS */}
      <div id="projects" className="mx-auto max-w-7xl px-6 lg:py-20 relative mb-10">
        {/* Decoración de fondo */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-[80%] h-40 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 inline-block mb-4">
            Mis Proyectos
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(({ img, title, text, link }) => (
            <motion.div
              key={title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* Tarjeta con efecto 3D */}
              <Atropos
                className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden mb-3 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-300"
                highlight={false}
                shadow={true}
                rotateXMax={5}
                rotateYMax={5}
                stretchZ={5}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover absolute inset-0"
                  data-atropos-offset="-10"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/50 to-transparent"
                  data-atropos-offset="0"
                />
                <div
                  className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white drop-shadow-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/50 to-purple-500/50 px-4 py-1 rounded-lg border border-white/10"
                  data-atropos-offset="10"
                >
                  {title}
                </div>
              </Atropos>

              {/* Descripción (visible solo en tablets y desktop) */}
              <div className="hidden sm:block bg-gray-800/50 p-4 rounded-xl border border-blue-500/10 backdrop-blur-sm h-[150px]">
                <p className="text-gray-300 text-sm mb-3">{text}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium text-sm transition-all hover:from-blue-300 hover:to-purple-400 group"
                >
                  Ver proyecto{" "}
                  <FaExternalLinkAlt
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Versión móvil - solo enlace */}
              <div className="sm:hidden text-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white font-medium text-sm transition-all hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-blue-500/20"
                >
                  Ver proyecto <FaExternalLinkAlt size={12} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
