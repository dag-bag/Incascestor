/** @format */

import Image from "next/image";
import React from "react";

function MainSlider() {
  return (
    <div className=" mx-auto h-64 mt-2 md:mt-0 relative md:h-[50vh] object-cover ">
      {/* Buttons */}
      <div className="flex w-full justify-between items-center absolute top-[50%] md:top-1/2 md:px-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div>
          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[21.86px] h-[21.86px] md:w-9 md:h-9 cursor-pointer"
            preserveAspectRatio="none"
          >
            <path
              d="M13.6627 4.23857L6.8313 11.07L13.6627 17.9014"
              stroke="#BD9575"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="0.5"
              y="-0.5"
              width="20.8605"
              height="20.8605"
              transform="matrix(1 0 0 -1 0 21)"
              stroke="#BD9575"
            />
          </svg>
        </div>
        <div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[21.86px] h-[21.86px]  md:w-9 md:h-9 cursor-pointer"
            preserveAspectRatio="none"
          >
            <rect
              x="-0.5"
              y="0.5"
              width="20.8605"
              height="20.8605"
              transform="matrix(-1 8.74228e-08 8.74228e-08 1 20.8605 0.000488325)"
              fill="#BD9575"
            ></rect>
            <path
              d="M8.19766 17.7619L15.0291 10.9305L8.19766 4.09912"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <rect
              x="-0.5"
              y="0.5"
              width="20.8605"
              height="20.8605"
              transform="matrix(-1 8.74228e-08 8.74228e-08 1 20.8605 0.000488325)"
              stroke="#BD9575"
            ></rect>
          </svg>
        </div>
      </div>
      {/* Slider images */}
      <Image
        src="/assets/slider/slider.jpg"
        layout="fill"
        objectFit="cover"
        alt="slider"
      />
    </div>
  );
}

export default MainSlider;
