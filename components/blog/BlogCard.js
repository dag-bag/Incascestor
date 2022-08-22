/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import truncate from "../../lib/Ese";

function BlogCard({ title, text, image, date, category, slug }) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
        <div className="relative">
          <Image
            src={image}
            className="object-cover w-full h-64"
            alt=""
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
          />
          <div
            className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100   absolute      bottom-0 left-0 flex items-center justify-center w-full h-10
"
          >
            <p className=" text-xs font-semibold tracking-wide uppercase">
              <a
                className="transition-colors duration-200 text-white hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                {category}
              </a>
              <span className="text-gray-100">— {date}</span>
            </p>
          </div>
        </div>
        <div className="p-5 border border-t-0">
          <a
            aria-label="Category"
            title="Film It!"
            className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {title}
          </a>
          <p className="mb-2 text-gray-700 h-24">{truncate(text, 100)}</p>
          <a
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
