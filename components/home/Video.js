/** @format */

import React from "react";
import Image from "next/image";
function Video() {
  return (
    <div className="w-[100%] m-auto relative my-10 max-w-6xl">
      <button className=" md:text-lg font-medium text-center text-[#e8e8e8] absolute  z-50 flex justify-center items-center rounded-sm bg-[#e8e8e8]/50 border border-[#bd9575] px-3 py-2 space-x-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          width={34}
          height={34}
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          preserveAspectRatio="none"
        >
          <path
            d="M30.301 16.0934L11.1791 4.40742C11.018 4.30899 10.8336 4.25525 10.6449 4.25171C10.4562 4.24818 10.2699 4.29498 10.1053 4.38731C9.94064 4.47964 9.80358 4.61417 9.70818 4.77704C9.61279 4.93992 9.5625 5.12527 9.5625 5.31403V28.686C9.5625 28.8748 9.61279 29.0601 9.70818 29.223C9.80358 29.3859 9.94064 29.5204 10.1053 29.6127C10.2699 29.705 10.4562 29.7519 10.6449 29.7483C10.8336 29.7448 11.018 29.691 11.1791 29.5926L30.301 17.9066C30.4563 17.8117 30.5846 17.6785 30.6736 17.5197C30.7626 17.361 30.8094 17.182 30.8094 17C30.8094 16.818 30.7626 16.639 30.6736 16.4803C30.5846 16.3215 30.4563 16.1883 30.301 16.0934Z"
            fill="white"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Descubre</span>
      </button>
      <Image
        src="/assets/home/somos.png"
        width={485}
        height={300}
        layout="responsive"
        alt="Image description"
        objectFit="cover"
      />
      <div className="w-full h-full absolute left-[0] top-[0] opacity-50 bg-[#845e40]" />
    </div>
  );
}

export default Video;
