import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/ImgProjecto1.webp';
import img2 from '../assets/imgProjecto2.webp';
import img3 from '../assets/imgProjecto3.webp';
import img4 from '../assets/ImgProjecto4.webp';



export const ProjectsItems = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        autoplaySpeed: 600,
        speed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            },
        ]
    };
    return (
        <div className="w-full flex flex-col justify-center items-center lg:mt-16 h-36 animate-projects">

            <h1 className="text-white text-center mb-2 text-2xl font-bold">Proyectos</h1>

            <div className="relative slider-container w-[98vw] lg:w-[600px] rounded-lg h-36">
                {/* Sombra izquierda */}
                <div className="z-10 absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none "></div>
                <Slider {...settings}>

                    <div className="px-0.5 lg:px-1 cursor-pointer">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg w-full lg:h-24 h-20 object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none focus:border-none">
                        <a href="https://heroes-hooks.vercel.app/" className="focus:outline-none focus:border-none"><img src={img2} className="rounded-lg w-full lg:h-24 h-20 object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none">
                        <a href="https://delicate-jalebi-4f6537.netlify.app/" className="focus:outline-none focus:border-none"><img src={img3} className="rounded-lg w-full lg:h-24 h-20 object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none">
                        <a href="https://react-propinas-ts.vercel.app/" className="focus:outline-none focus:border-none"><img src={img4} className="rounded-lg w-full lg:h-24 h-20 object-cover" alt="imagen" /></a>
                    </div>
                </Slider>
                {/* Sombra derecha */}
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
            </div>

        </div>
    );
}
