/** @format */

import React from "react";

function Mission() {
  return (
    <div className="flex  justify-evenly flex-wrap-reverse">
      <div className="flex items-start flex-col">
        <div className="w-[45rem] h-[262px] ">
          <p className="relative  text-4xl text-right text-[#333]">
            Somos
            <svg
              width={60}
              height={2}
              viewBox="0 0 60 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-14 right-0"
              preserveAspectRatio="none"
            >
              <path d="M0 1L60 0.999995" stroke="#333333" />
            </svg>
          </p>

          <p className=" text-base text-right text-[#333] mt-24">
            Inca Ancestry was born with the mission to make a change in the
            lives of the Andean communities while helping them to maintain their
            ancestral traditions alive by giving visibility to their finest
            artisans to the world.
          </p>
        </div>
        <button className="w-[327px] border border-[#bd9575] h-[19.14px] text-lg font-medium text-center text-[#bd9575]">
          Cosmos
        </button>
      </div>
      <div className="flex-1">hiiiiii</div>
    </div>
  );
}

export default Mission;
