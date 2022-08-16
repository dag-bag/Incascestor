/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
function BlogCard({ href, sig }) {
  return (
    <Link href={`/blog/${href}`}>
      <article className="flex flex-col shadow my-4">
        {/* Article Image */}
        <a href="#" className="hover:opacity-75">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${sig}`}
            layout="responsive"
            width={200}
            height={100}
            alt="Article Image"
          />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-primary-1 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </a>
          <p href="#" className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              Jhosep Guzman
            </a>
            , Published on April 25th, 2020
          </p>
          <a href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          <a href="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right" />
          </a>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
