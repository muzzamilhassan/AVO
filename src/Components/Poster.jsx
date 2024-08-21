import React from "react";

const Poster = () => {
  return (
    <div className=" md:mx-24 pb-20 lg:mx-[175px] relative">
      <div className="flex items-center h-96 overflow-hidden">
        <img
          src="/bg_1.jpg.webp"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-0 left-6 py-2">
        <div className="flex flex-col justify-center h-96 space-y-4 w-96">
          <h1 className="text-[#DC2626] tracking-widest ">Get Started</h1>
          <h1 className="text-white md:text-4xl">Fill in the Brief and get the project estimate</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            earum.
          </p>
          <div>

          <button className="bg-[#DC2626] py-2 px-3 rounded">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
