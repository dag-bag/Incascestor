/** @format */

import React from "react";

function ColorBtn({ color }) {
  return (
    <span
      className={`block p-1 border-2  border-gray-500 rounded-full transition ease-in duration-300 `}
    >
      <a
        className={`block w-6 h-6 
         ${color === "black" && "bg-black"}
         ${color === "red" && "bg-red-500"}
         ${color === "blue" && "bg-blue-500"}
         ${color === "green" && "bg-green-500"}
         ${color === "yellow" && "bg-yellow-500"}
      
      
        rounded-full  `}
      ></a>
    </span>
  );
}

export default ColorBtn;
