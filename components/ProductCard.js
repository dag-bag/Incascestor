/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import truncate from "../lib/Ese";
import { addToCartAtom } from "../selectors/cartSelectors";
import { useRecoilState } from "recoil";
import { BlurImage } from "./BlurImage";
function ProductCard({ fav, slug, title, desc, price, color, size, img }) {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="flex group relative  md:w-full bg-[#e8e8e8] h-[200px] md:h-[330px] justify-end items-center flex-col">
          <BlurImage image={img} />
          <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white/60 opacity-0 group-hover:h-[60%] group-hover:opacity-100 duration-500">
            <h1 className="text-xl text-center text-[#333]">{title}</h1>
            <div className="space-x-1 mt-4">
              {size.includes("SM") && (
                <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
                  SM
                </span>
              )}
              {size.includes("XL") && (
                <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
                  XL
                </span>
              )}
              {size.includes("LG") && (
                <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
                  LG
                </span>
              )}
              {size.includes("XXL") && (
                <span className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3">
                  XXL
                </span>
              )}
            </div>
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
      </Link>
      <div className="flex justify-between  w-full mt-2">
        <div className="w-full h-[72px] ">
          <p className="  text-center text-black">{title}</p>
          <div className="flex justify-center">
            <Image
              src={"/assets/star.svg"}
              width={20}
              height={20}
              className={"!text-blue-500"}
            />
            <Image
              src={"/assets/star.svg"}
              width={20}
              height={20}
              className={"!text-blue-500"}
            />
            <Image
              src={"/assets/star.svg"}
              width={20}
              height={20}
              className={"!text-blue-500"}
            />
            <Image
              src={"/assets/star.svg"}
              width={20}
              height={20}
              className={"!text-blue-500"}
            />
            <Image
              src={"/assets/star.svg"}
              width={20}
              height={20}
              className={"!text-blue-500"}
            />
          </div>
          <p className=" text-base text-center text-black">{price} $</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
