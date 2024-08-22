import Navbar from "./Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from "react-countup";
const Hero = () => {
 
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
      <div className={`absolute top-0 py-4 left-0 w-full z-50`}> 
          <Navbar />
        // </div> 
        <Slider {...settings}>
          <div>
            <h3 className="relative">
              <img src="/bg_1.jpg.webp" alt="" className="w-full clip-path-hero md:clip-path-hero-mble h-screen" />
              <div className="absolute top-14 sm:top-40 md:top-0 left-0 px-10 lg:px-[175px] text-white grid md:grid-cols-2 items-center md:h-screen w-full space-y-3 md:space-y-0">
                <div className="pt-10 md:pt-0 space-y-4 md:space-y-4 md:order-1 order-2">
                  <h1 className="md:text-5xl font-bold md:w-4/5">
                    WE CREATE  MODERN & <span className="text-nowrap">
                    MINIMAL WEBSITE
                      </span>
                  </h1>
                  <p className="text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum, explicabo. Mollitia voluptatum tempore hic{" "}
                  </p>
                  <button className="py-3 px-5 rounded bg-[#D1002C]">
                    Explore Projects
                  </button>
                </div>
                <div className="order-1 md:order-2 md:space-y-4 flex flex-col md:items-end md:text-end md:pb-44">
                  <CountUp
                    end={30}
                    duration={20}
                    className=" w-8 md:w-auto text-xl md:text-4xl font-bold pr-2 border-r-4 border-red-500"
                  />
                  <h1 className=" md:text-xl text-gray-500 capitalize">
                    year of <br />
                    experience
                  </h1>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 className="relative">
              <img src="/bg_1.jpg.webp" alt="" className="w-full clip-path-hero md:clip-path-hero-mble h-screen" />
              <div className="absolute top-14 sm:top-40 md:top-0 left-0 px-10 lg:px-[175px] text-white grid md:grid-cols-2 items-center md:h-screen w-full space-y-3 md:space-y-0">
                <div className="pt-10 md:pt-0 space-y-4 md:space-y-4 md:order-1 order-2">
                  <h1 className="md:text-5xl font-bold md:w-4/5">
                    WE CREATE  MODERN & <span className="text-nowrap">
                    MINIMAL WEBSITE
                      </span>
                  </h1>
                  <p className="text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum, explicabo. Mollitia voluptatum tempore hic{" "}
                  </p>
                  <button className="py-3 px-5 rounded bg-[#D1002C]">
                  Start Projects
                  </button>
                </div>
                <div className="order-1 md:order-2 md:space-y-4 flex flex-col md:items-end md:text-end md:pb-44">
                  <CountUp
                    end={400}
                    duration={20}
                    className=" w-11 md:w-auto text-xl md:text-4xl font-bold pr-2 border-r-4 border-red-500"
                  />
                  <h1 className=" md:text-xl text-gray-500 capitalize">
                  more than a <br /> hundred successful <br />
                    projects
                  </h1>
                </div>
              </div>
            </h3>
          </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
