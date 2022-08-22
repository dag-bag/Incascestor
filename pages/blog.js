/** @format */

import mongoose from "mongoose";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogContainer from "../components/blog/BlogContainer";
import Siderbar from "../components/blog/Siderbar";
import H1 from "../components/H1";
import Blogs from "../models/Blog";

function Blog({ blogs }) {
  return (
    <div>
      <Head></Head>
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
            {blogs.map((blog) => {
              return (
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  text={blog.text}
                  image={blog.img}
                  date={blog.date}
                  slug={blog.slug}
                  category={blog.category}
                />
              );
            })}
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

export async function getServerSideProps({ res }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  );
  let blogs = await Blogs.find({});
  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }, // will be passed to the page component as props
  };
}
