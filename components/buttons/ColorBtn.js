/** @format */

import React from "react";

function ColorBtn({ color }) {
  return (
    <span
      className={`block p-1 border-2  border-gray-500 rounded-full transition ease-in duration-300`}
    >
      <a
        className={`block w-6 h-6 ${color === "white" && "bg-gray-400"} ${
          color === "black" && "bg-black"
        } bg-${color}-500  rounded-full `}
      ></a>
    </span>
  );
}

export default ColorBtn;
