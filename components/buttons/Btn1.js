/** @format */

import React from "react";

function Btn1(props) {
  return (
    <button
      className={`mr-auto px-14 md:px-24 py-3 md:py-2 border  border-[#bd9575]  md:text-lg font-medium text-center text-[#bd9575] hover:text-white group hover:bg-gray-50 relative inline-flex items-center overflow-hidden`}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-[#bd9575] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="relative">{props.children}</span>
    </button>
  );
}

export default Btn1;
