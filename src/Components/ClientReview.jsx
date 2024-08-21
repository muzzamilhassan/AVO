import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from "react-countup";

const ClientReview = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   rtl: true,
  // };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    slidesToShow: 3, // default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2500, // slower autoplay on smaller screens
        },
      },
      {
        breakpoint: 768, // mobile landscape and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000, // slowest autoplay on smallest screens
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden sm:px-10 lg:px-[175px] py-32">
      <h1 className="text-center text-5xl font-semibold uppercase pb-20">Client says about us ?</h1>
      <div className="slider text-gray-600 ">
        <Slider {...settings}>
          <div className="relative">
            <img src="/dialog.png" alt=""  className="w-10 absolute -top-2 left-8"/>
            <div className="bg-[#F3F3F3] p-4 m-4 rounded-sm ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                possimus amet dolor necessitatibus mollitia eum, sit aliquam
                dolores quidem quia esse ipsam officiis ad tempora delectus
                obcaecati perspiciatis aspernatur aut.
              </p>
              <div className={`flex py-4 items-center gap-4`}>
                <img
                  src="/work-images/person.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-sm">
                  <h1 className="text-black font-semibold">muzzideveloper</h1>
                  <h2>
                    muzzideveloper.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#F3F3F3] p-4 m-4 rounded-sm relative">
            <img src="/dialog.png" alt=""  className="w-10 absolute -top-6 left-5"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                possimus amet dolor necessitatibus mollitia eum, sit aliquam
                dolores quidem quia esse ipsam officiis ad tempora delectus
                obcaecati perspiciatis aspernatur aut.
              </p>
              <div className={`flex py-4 items-center gap-4`}>
                <img
                  src="/work-images/person.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-sm">
                  <h1 className="text-black font-semibold">muzziDevloper</h1>
                  <h2>
                    muzzideveloper.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#F3F3F3] p-4 m-4 rounded-sm relative">
            <img src="/dialog.png" alt=""  className="w-10 absolute -top-6 left-5"/>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                possimus amet dolor necessitatibus mollitia eum, sit aliquam
                dolores quidem quia esse ipsam officiis ad tempora delectus
                obcaecati perspiciatis aspernatur aut.
              </p>
              <div className={`flex py-4 items-center gap-4`}>
                <img
                  src="/work-images/person.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-sm">
                  <h1 className="text-black font-semibold">muzziDeveloper</h1>
                  <h2>
                    muzzideveloper.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientReview;
