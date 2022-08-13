/** @format */

import React from "react";
import Image from "next/image";
function Mission({ title, description, image, boxType }) {
  return (
    <div className={`flex  justify-evenly  flex-wrap-reverse  py-16 `}>
      <div
        className={`px-5 flex justify-end flex-col   space-y-12 mt-8 md:w-[50%]`}
      >
        <div
          className={` ${
            boxType === "center-left" ? "text-left" : "text-right"
          } mb-6 md:w-[70%] ml-auto`}
        >
          <p className="relative  text-2xl  lg:text-4xl  text-[#333]">
            {title}
            <svg
              width={60}
              height={2}
              viewBox="0 0 60 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute  right-0 ${
                boxType === "center-center" ? "top-18" : "top-10"
              }  ${boxType === "center-left" ? "left-0" : "right-0"} md:top-14`}
              preserveAspectRatio="none"
            >
              <path d="M0 1L60 0.999995" stroke="#333333" />
            </svg>
          </p>

          <p className=" text-base  text-[#333] mt-12 ">{description}</p>
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
        <button
          className={`${
            boxType === "center-left" ? "mr-auto" : "ml-auto"
          }  px-14 md:px-24 py-3 md:py-2 border  border-[#bd9575]  md:text-lg font-medium text-center text-[#bd9575] `}
        >
          Cosmos
        </button>
      </div>
      <div
        className={`flex-1 flex  ml-2 relative ${
          boxType === "center-left" && "justify-center mr-2 ml-0"
        } ${
          boxType === "center-center" && "justify-center  ml-0"
        } justify-center `}
      >
        <div
          className={`w-[70%] h-[100%] rounded-[3px]  ${
            boxType === "center-center" ? "bg-[#e8e8e8]" : "bg-[#bd9575]"
          } absolute md:w-1/2 -top-12  ${
            boxType === "left-right" && "right-0"
          }      ${boxType === "center-left" && "left-0"} `}
        ></div>
        <div className="w-[70%] rounded-[3px]  md:w-1/2">
          <Image
            src={image}
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
