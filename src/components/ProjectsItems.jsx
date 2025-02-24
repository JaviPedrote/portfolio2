import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/ImgProjecto1.webp';

export const ProjectsItems = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        cssEase: "linear",
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             arrows: false,
        //         }
        //     },
        // ]
    };
    return (
        <div className="w-full flex flex-col justify-center items-center lg:mt-16 h-36">

            <h1 className="text-white text-center mb-2 text-2xl font-bold">Proyectos</h1>

            <div className="relative slider-container w-[98vw] lg:w-[600px] rounded-lg h-36">
                {/* Sombra izquierda */}
                <div className="z-10 absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none "></div>
                <Slider {...settings}>

                    <div className="px-0.5 lg:px-1 cursor-pointer">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg w-full h-auto object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none focus:border-none">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg w-full h-auto object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg w-full h-auto object-cover" alt="imagen" /></a>
                    </div>
                </Slider>
                {/* Sombra derecha */}
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
            </div>

        </div>
    );
}
