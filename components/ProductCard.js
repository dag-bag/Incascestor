/** @format */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { BsSuitHeart } from "react-icons/bs";
import { BlurImage } from "./BlurImage";
import { useRecoilState } from "recoil";
import { favSelector } from "../atoms/CartAtom";
import { shuffle } from "lodash";
function ProductCard({
  fav,
  slug,
  title,
  desc,
  price,
  color,
  size,
  img,
  category,
  tag,
}) {
  const [favItems, setFavItems] = useRecoilState(favSelector);

  const removeFav = () => {
    let removesItem = _.reject(favItems, { title: title });
    setFavItems(removesItem);
  };

  return (
    <div className="relative rounded-md">
      <Link href={`/product/${slug}`}>
        <div className="relative ">
          {tag !== "General" && (
            <span
              className={`absolute  left-1 top-5 z-40 block bg-${
                tag === "New" ? "blue" : "orange"
              }-500 rounded-full py-1 px-3 text-white`}
            >
              {tag}
            </span>
          )}
          <div className="flex group relative  md:w-full bg-[#e8e8e8] h-[200px] md:h-[330px] justify-end items-center flex-col min-w-[300px]">
            <BlurImage image={img[0]} rounded={"md"} />
            {/* <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-white/60 opacity-0 group-hover:h-[60%] group-hover:opacity-100 duration-500">
              <h1 className="text-xl text-center text-[#333]">{title}</h1>
              <div className="space-x-1 mt-4">
                {size.map((item, id) => {
                  return (
                    <span
                      key={id}
                      className="text-base text-left text-black cursor-pointer rounded-full hover:bg-white/60 p-3"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div> */}
          </div>
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
              className={"!text-blue-500 "}
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
