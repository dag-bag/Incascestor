/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import truncate from "../../lib/Ese";
import { BlurImage } from "../BlurImage";

function BlogCard({ title, text, image, date, category, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <>
        <div className="rounded overflow-hidden shadow-lg">
          <a href="#" />
          <div className="relative">
            <div className="relative w-full h-56">
              <BlurImage image={image} />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
            </div>
            <a>
              <div className="absolute bottom-0 left-0 bg-primary-1 px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
                {category}
              </div>
            </a>
            <a>
              <div className="text-sm absolute top-0 right-0 bg-primary-1 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
                <span className="font-bold">{new Date(date).getDate()}</span>
                <small>
                  {new Date(date).toLocaleString("default", { month: "short" })}
                </small>
              </div>
            </a>
          </div>
          <div className="px-6 py-4">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {title}
            </a>
            <p className="text-gray-500 text-sm">{truncate(text, 100)}</p>
          </div>
          <div className="px-6 ">
            <button className=" bg-primary-1 px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
              read more
            </button>
          </div>
          <div className="px-6 py-4 flex flex-row items-center">
            {/* <span
              href="#"
              className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                    />
                  </g>
                </g>
              </svg>
              <span className="ml-1">6 mins ago</span>
            </span> */}
          </div>
        </div>
      </>

      {/* <div className="transition-shadow duration-300 bg-white rounded h-[500px]">
        <div aria-label="Article" className="relative w-full h-56">
          <Image
            src={image}
            className="object-cover w-full h-64 rounded"
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
          <BlurImage image={image} />
        </div>
        <div className="py-5">
          <a
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <h2 className="text-2xl  leading-5">{title}</h2>
          </a>
          <p className="mb-2 text-xs  text-gray-600 uppercase py-1 space-x-3">
            <span>By: Gurnaaz lopez -</span>
            <span>
              <Image
                src="/assets/1.svg"
                alt=""
                width={10}
                height={10}
                className=""
              /> {new Date(date).toDateString()}
            </span>
            <span></span>
          </p>
          <p className="mb-4 text-gray-500 text-xs font-light">
            {truncate(text, 100)}
          </p>
          <div className="flex space-x-4">
            <a
              aria-label="Likes"
              className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
            >
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                >
                  <polyline
                    points="6 23 1 23 1 12 6 12"
                    fill="none"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <p className="font-semibold">7.4K</p>
            </a>
            <a
              aria-label="Comments"
              className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
            >
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                >
                  <polyline
                    points="23 5 23 18 19 18 19 22 13 18 12 18"
                    fill="none"
                    strokeMiterlimit="10"
                  />
                  <polygon
                    points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <p className="font-semibold">81</p>
            </a>
          </div>
        </div>
      </div> */}
    </Link>
  );
}

export default BlogCard;
