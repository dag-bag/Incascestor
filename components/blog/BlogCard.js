/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
function BlogCard({ href, sig }) {
  return (
    <Link href={`/blog/${href}`}>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div className="relative">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${sig}`}
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
                traveling
              </a>
              <span className="text-gray-100">— 28 Dec 2020</span>
            </p>
          </div>
        </div>
        <div className="p-5 border border-t-0">
          <a
            aria-label="Category"
            title="Film It!"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Film It!
          </a>
          <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
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
