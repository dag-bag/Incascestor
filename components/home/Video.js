/** @format */

import React from "react";
import Image from "next/image";
function Video() {
  return (
    <div className="w-[70%] m-auto relative">
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
