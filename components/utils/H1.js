/** @format */

import React from "react";
function H1({ h1 }) {
  return (
    <h1 className=" text-white text-4xl md:text-5xl text-center leading-tight font-bold ">
      {h1.replace(/<br \/>/g, "\n")}
    </h1>
  );
}

export default H1;
