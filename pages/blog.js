/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogContainer from "../components/blog/BlogContainer";
import Siderbar from "../components/blog/Siderbar";
import H1 from "../components/H1";

function Blog() {
  return (
    <div>
      <H1>Blogs</H1>
      <h3 className=" text-xl font-light text-center  text-[#333]">
        Somos Incancestry
      </h3>
      <p className="text-xl font-light text-center text-[#bd9575] mt-3">
        ¡Conóce más de nuetro amor por las alpacas!
      </p>

      <div className=" flex flex-wrap py-6 justify-center">
        {/* Posts Section */}
        <section className="w-full md:w-2/3 flex flex-col items-center  px-3">
          <BlogContainer>
            <BlogCard href="blog-post" sig="1" />
            <BlogCard href="blog-post" sig="2" />
            <BlogCard href="blog-post" sig="3" />
            <BlogCard href="blog-post" sig="4" />
            <BlogCard href="blog-post" sig="5" />
          </BlogContainer>
          {/* Pagination */}
          <div className="flex items-center py-8 ">
            <a
              href="#"
              className="h-10 w-10 bg-primary-1 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
            >
              1
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              2
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>
        </section>
        <Siderbar />
      </div>
    </div>
  );
}

export default Blog;
