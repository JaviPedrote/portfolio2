
import Slider from "react-slick";
import { motion, } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1     from "../assets/ImgProjecto1.webp";
import img2     from "../assets/imgProjecto2.webp";
import img3     from "../assets/imgProjecto3.webp";
import img4     from "../assets/ImgProjecto4.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useRef } from "react";

export function ProjectsItems() {
    const sliderRef = useRef(null);

    const projects = [
      { img: img1, link: "https://simulacros.vercel.app/", name: "Simulacros" },
      { img: img2, link: "https://heroes-hooks.vercel.app/", name: "Heroes Hooks" },
      { img: img3, link: "https://delicate-jalebi-4f6537.netlify.app/", name: "Weather App" },
      { img: img4, link: "https://react-propinas-ts.vercel.app/", name: "Propinas TS" },
    ];
  
    // Flechas personalizadas con Tailwind + FramerMotion hover
    const Arrow = ({ onClick, direction }) => (
      <motion.button
        aria-label={direction === "left" ? "Anterior" : "Siguiente"}
        className={`absolute ${
        direction === "left" ? "left-4" : "right-4"
      } top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-gray-800/70 backdrop-blur text-white z-20`}
        onClick={onClick}
        whileHover={{backgroundColor: "#22c55e" }}
      >
        {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
      </motion.button>
    );
  
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <Arrow direction="left" />,
      nextArrow: <Arrow direction="right" />,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 7000,
      cssEase: "linear",
      pauseOnHover: false,
      pauseOnFocus: false,
      swipeToSlide: true,
      responsive: [
        { breakpoint: 1536, settings: { slidesToShow: 4 } },
        { breakpoint: 1280, settings: { slidesToShow: 4 } },
        { breakpoint: 640, settings: { slidesToShow: 3, arrows: false } },
        { breakpoint: 480, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 320, settings: { slidesToShow: 2, arrows: false } },
      ],
    };
  
    // Pausa/reanuda de forma manual porque autoplaySpeed 0 ignora la prop nativa
    const handleMouseEnter = () => sliderRef.current?.slickPause();
    const handleMouseLeave = () => sliderRef.current?.slickPlay();
  
    return (
      <section id="projects" className="lg:py-20 py-10 bg-gray-950">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">Proyectos</h2>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />
  
            <Slider ref={sliderRef} {...settings} className="px-2">
              {projects.map(({ img, link, name }) => (
                <motion.a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-none px-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="rounded-xl w-full aspect-video object-cover shadow-md"
                  />
                </motion.a>
              ))}
            </Slider>
          </div>
        </motion.div>
      </section>
    );
  }
  