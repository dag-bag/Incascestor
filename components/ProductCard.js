/** @format */

import React from "react";
import Image from "next/image";
function ProductCard() {
  return (
    <div>
      <div className="flex group relative  md:w-[80%] bg-[#e8e8e8] h-[300px] md:h-[360px] justify-end items-center flex-col">
        <img
          src="product.jpg"
          alt="black chair and white table"
          className="object-cover object-center w-full h-[60%] cursor-pointer"
        />

        <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white/60 opacity-0 group-hover:h-[60%] group-hover:opacity-100 duration-500">
          <h1 className="text-xl text-[#333]">Tallas</h1>
          <div className="space-x-1 mt-4">
            <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
              34
            </span>
            <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
              34
            </span>
            <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-4">
              34
            </span>
            <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
              34
            </span>
          </div>
          <a
            className="mt-5 px-8 py-3 rounded-full bg-[#bd9575] hover:bg-amber-600 duration-300 text-white"
            href="#"
          >
            Add Cart
          </a>
        </div>
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
      <div className="flex justify-between  w-[80%] mt-2">
        <div className="w-[218px] h-[72px]">
          <p className=" text-base font-medium text-left text-black">
            Pantuflas Alpha
          </p>
          <p className=" text-base font-light text-left text-black">
            Zapatos cómodos de casa.
          </p>
          <p className=" text-base text-left text-black">79,99 $</p>
        </div>
        <div>
          <svg
            width={36}
            height={36}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 relative cursor-pointer "
            preserveAspectRatio="none"
          >
            <path
              d="M18.0016 30.375C18.0016 30.375 3.93915 22.5 3.93915 12.9375C3.93943 11.2474 4.52507 9.60953 5.59648 8.30239C6.66789 6.99526 8.15894 6.09954 9.81613 5.76752C11.4733 5.4355 13.1944 5.68768 14.6866 6.48118C16.1789 7.27468 17.3503 8.56052 18.0017 10.1201L18.0016 10.1201C18.653 8.56053 19.8244 7.27469 21.3167 6.48119C22.8089 5.68769 24.53 5.43551 26.1872 5.76752C27.8443 6.09954 29.3354 6.99526 30.4068 8.30239C31.4782 9.60953 32.0639 11.2474 32.0641 12.9375C32.0641 22.5 18.0016 30.375 18.0016 30.375Z"
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
