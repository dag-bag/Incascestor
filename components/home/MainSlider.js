/** @format */

import Image from "next/image";
import React from "react";

function MainSlider() {
  return (
    <div className="relative hidden md:block">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center flex-col">
        <h1 className=" text-white text-5xl text-center leading-tight ">
          Your photos printed, <br /> framed, and delivered
        </h1>
        <button className="px-7 py-3 rounded-full bg-primary-1 text-text-primary font-bold text-xl mt-6 text-white">
          Start Framing
        </button>
      </div>
      <Image
        src="/assets/slider/slider.jpg"
        alt=""
        className="header-image w-full object-cover h-[80vh]"
        layout="responsive"
        objectFit="cover"
        width={100}
        height={35}
      />
    </div>
  );
}

export default MainSlider;
