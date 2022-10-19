/** @format */

import Link from "next/link";
import React from "react";

function Btn({ text, onClick, className }) {
  const classes = `bg-[#333] text-white  py-4 px-8 mt-4 w-full md:w-[24rem] cursor-pointer ${className}`;
  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
}

export default Btn;
