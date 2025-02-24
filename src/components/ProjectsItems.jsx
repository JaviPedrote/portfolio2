import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/ImgProjecto1.webp';

export const ProjectsItems = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        cssEase: "linear"
    };
    return (
        <div className="w-full flex justify-center items-center mt-24 h-24">
            <div className="slider-container w-[60vw] lg:w-[600px] rounded-lg h-full">
                <Slider {...settings}>
                    <div className="px-1 cursor-pointer focus:outline-none">
                        <a href="https://simulacros.vercel.app/" className=""><img src={img1} className="rounded-lg h-[10vh] select-none" alt="imagen" /></a>
                    </div>
                    <div className="px-1 cursor-pointer focus:outline-none">
                        <a href="https://simulacros.vercel.app/" className=""><img src={img1} className="rounded-lg h-[10vh] select-none" alt="imagen" /></a>
                    </div>
                    <div className="px-1 cursor-pointer focus:outline-none">
                        <a href="https://simulacros.vercel.app/" className=""><img src={img1} className="rounded-lg h-[10vh] select-none" alt="imagen" /></a>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
