/** @format */

/** @format */

import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function BlurImage({ image, rounded, cursor, handleClick, alt, type }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
        <Image
          alt={alt}
          src={image}
          layout={type === "responsive" ? "responsive" : "fill"}
          width={100}
          height={100}
          objectFit="cover"
          className={cn(
            `group-hover:opacity-75 duration-700 ease-in-out object-cover rounded-${rounded} ${
              isLoading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            } cursor-${cursor}`
          )}
          onLoadingComplete={() => setLoading(false)}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
