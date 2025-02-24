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
    };
    return (
        <div className="w-full flex justify-center items-center lg:mt-24 h-24">


            <div className="relative slider-container w-[95vw] lg:w-[600px] rounded-lg h-full">
                {/* Sombra izquierda */}
                <div className="z-10 absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
                <Slider {...settings}>
                    <div className="px-0.5 lg:px-1 cursor-pointer">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg h-[10vh] object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none focus:border-none">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg h-[10vh] object-cover" alt="imagen" /></a>
                    </div>
                    <div className="px-0.5 lg:px-1 cursor-pointer focus:outline-none">
                        <a href="https://simulacros.vercel.app/" className="focus:outline-none focus:border-none"><img src={img1} className="rounded-lg h-[10vh] object-cover" alt="imagen" /></a>
                    </div>
                </Slider>
                {/* Sombra derecha */}
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
            </div>

        </div>
    );
}
