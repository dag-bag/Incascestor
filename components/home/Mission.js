/** @format */

import React from "react";
import Image from "next/image";
function Mission() {
  return (
    <div className="flex  justify-evenly flex-wrap-reverse py-16 ">
      <div className="px-5 flex justify-end flex-col  space-y-12 mt-8">
        <div>
          <p className="relative  text-2xl  lg:text-4xl text-right text-[#333]">
            Somos
            <svg
              width={60}
              height={2}
              viewBox="0 0 60 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-10 right-0"
              preserveAspectRatio="none"
            >
              <path d="M0 1L60 0.999995" stroke="#333333" />
            </svg>
          </p>

          <p className=" text-base text-right text-[#333] mt-12">
            Inca Ancestry was born with the mission to make a change in the
            lives of the Andean communities while helping them to maintain their
            ancestral traditions alive by giving visibility to their finest
            artisans to the world.
          </p>
        </div>
        {/* <div className="flex justify-end flex-col space-y-16">
         
          <div className="flex justify-end">
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M17 32H48M17 32L28 21M17 32L28 43"
                stroke="#C7C7C7"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M62 32H2M62 32L47 17M62 32L47 47"
                stroke="#333333"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div> */}
        <button className="ml-auto px-14 md:px-24 py-3 md:py-2 border border-[#bd9575]  md:text-lg font-medium text-center text-[#bd9575]">
          Cosmos
        </button>
      </div>
      <div className="flex-1 flex ml-2 relative ">
        <div className="w-[70%] h-[100%] rounded-[3px]  bg-[#bd9575] absolute -top-12  right-0 md:w-1/2"></div>
        <div className="w-[70%] rounded-[3px]  md:w-1/2">
          <Image
            src={"/assets/home/Artesano.jpg"}
            alt="Artesano"
            width={576}
            height={576}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;
