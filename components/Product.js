/** @format */

import React from "react";
import Image from "next/image";
function Product() {
  return (
    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-[#e8e8e8] h-[300px] md:h-[400px] justify-center items-center flex-col">
      <img
        src="product.jpg"
        alt="black chair and white table"
        className="object-cover object-center w-full h-[60%]"
      />
      <p className=" text-[#333] text-bold text-2xl mt-5">Pantuflas</p>
      {/* <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
        <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
          Catalog 2
        </h2>
        <div className="flex h-full items-end pb-6">
          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
            Minimal Interior
          </h3>
        </div>
      </div> */}
    </div>
  );
}

export default Product;
