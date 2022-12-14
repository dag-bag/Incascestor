/** @format */

import { truncate } from "lodash";
import Image from "next/image";
import React from "react";
import Btn1 from "../buttons/Btn1";

function ReverseMissoin({ title, description, image }) {
  return (
    <div className={`flex  justify-evenly  flex-wrap  py-16 `}>
      <div className={`flex-1 flex  relative justify-center mr-2 ml-0  `}>
        <div
          className={`w-[70%] h-[100%] rounded-[3px] absolute md:w-1/2 -top-14  bg-[#bd9575] left-0 md:left-14`}
        ></div>
        <div className="w-[70%] rounded-[3px]  md:w-1/2">
          <Image
            src={image}
            alt="Artesano"
            width={576}
            height={620}
            layout="responsive"
          />
        </div>
      </div>
      <div className={`px-5 flex  flex-col   space-y-12 mt-8 md:w-[50%]`}>
        <div className={` text-left mb-6 md:w-[70%] mr-auto`}>
          <p className="relative  text-2xl  lg:text-4xl  text-[#333]">
            {title}
            <svg
              width={60}
              height={2}
              viewBox="0 0 60 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute  right-0 left-0 md:top-14`}
              preserveAspectRatio="none"
            >
              <path d="M0 1L60 0.999995" stroke="#333333" />
            </svg>
          </p>

          <p className=" text-base  text-[#333] mt-12 ">
            {truncate(description, {
              length: 250,
              omission: "...",
            })}
          </p>
        </div>

        <Btn1>Cosmos</Btn1>
      </div>
    </div>
  );
}

export default ReverseMissoin;
