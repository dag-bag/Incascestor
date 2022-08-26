/** @format */

import Image from "next/image";
import React from "react";
import { BlurImage } from "../BlurImage";

function MainSlider() {
  return (
    <div className="relative  md:block">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center flex-col">
        <h1 className=" text-white text-5xl text-center leading-tight font-bold">
          Inca Ancestry get to know the history of the Incs
        </h1>
      </div>
      <div className="w-full h-[70vh] relative">
        {/* <Image
        src="/assets/slider/slider.jpg"
        alt=""
        className="header-image w-full object-cover h-[80vh]"
        layout="responsive"
        objectFit="cover"
        width={100}
        height={35}
      /> */}
        <BlurImage image={"/assets/slider/slider.jpg"} />
      </div>
    </div>
  );
}

export default MainSlider;
