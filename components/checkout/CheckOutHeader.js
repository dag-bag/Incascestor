/** @format */

import React from "react";

function CheckOutHeader({ level }) {
  const svg = (
    <svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[30px] h-[30px]"
      preserveAspectRatio="none"
    >
      <circle
        cx={25}
        cy={25}
        r={20}
        fill="#E8E8E8"
        stroke="white"
        strokeWidth={10}
      />
      <path
        d="M18 26L22 30L31 21"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="max-w-6xl m-auto h-11 flex items-center justify-center relative">
      <span className="absolute left-0">
        {level === 1 ? (
          <span className="bg-[#333] w-5 h-5 rounded-full  text-white flex justify-center items-center">
            1
          </span>
        ) : (
          svg
        )}
      </span>
      <span className="absolute left-72">
        {" "}
        {level === 2 ? (
          <span className="bg-[#333] w-5 h-5 rounded-full  text-white flex justify-center items-center">
            2
          </span>
        ) : (
          svg
        )}
      </span>
      <span className="absolute top-2">
        {" "}
        {level === 3 ? (
          <span className="bg-[#333] w-5 h-5 rounded-full  text-white flex justify-center items-center">
            3
          </span>
        ) : (
          svg
        )}
      </span>
      <span className="absolute right-72">
        {" "}
        {level === 4 ? (
          <span className="bg-[#333] w-5 h-5 rounded-full  text-white flex justify-center items-center">
            4
          </span>
        ) : (
          svg
        )}
      </span>
      <span className="absolute right-0">
        {" "}
        {level === 5 ? (
          <span className="bg-[#333] w-5 h-5 rounded-full  text-white flex justify-center items-center">
            5
          </span>
        ) : (
          svg
        )}
      </span>
      <hr className=" h-[2px] w-full bg-gray-200" />
    </div>
  );
}

export default CheckOutHeader;
