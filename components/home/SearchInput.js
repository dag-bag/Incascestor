/** @format */

import React from "react";

function SearchInput() {
  const svgClass = "md:w-8 md:h-8 h-6 w-6 cursor-pointer mr-3 text-black";
  return (
    <div className="w-11/12 h-[37px] opacity-50 rounded-[1px] bg-[#e8e8e8] mx-auto flex justify-center items-center px-3">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
        preserveAspectRatio="none"
      >
        <path
          d="M14.4998 25C20.2987 25 24.9998 20.299 24.9998 14.5C24.9998 8.70101 20.2987 4 14.4998 4C8.70077 4 3.99976 8.70101 3.99976 14.5C3.99976 20.299 8.70077 25 14.4998 25Z"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.9241 21.9248L27.9991 27.9999"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <input type="text" className="bg-[#e8e8e8] w-full h-full outline-none" />
    </div>
  );
}

export default SearchInput;
