/** @format */

import Link from "next/link";
import React from "react";

function Btn({ text }) {
  return (
    <button className="bg-[#333] text-white rounded-sm py-4 px-8 mt-4 w-full md:w-[24rem]">
      {text}
    </button>
  );
}

export default Btn;
