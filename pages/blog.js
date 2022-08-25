/** @format */

import mongoose from "mongoose";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCard from "../components/blog/BlogCard";

import BlogContainer from "../components/blog/BlogContainer";
import Siderbar from "../components/blog/Siderbar";
import { Test } from "../components/blog/Test";
import { BlurImage } from "../components/BlurImage";
import H1 from "../components/H1";
import Blogs from "../models/Blog";

function Blog({ blogs }) {
  return (
    <div>
      <Head></Head>
      <div className="relative hidden md:block ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center flex-col">
          <h1 className=" text-white text-5xl text-center leading-tight font-bold">
            Latest post on, <br /> animal world
          </h1>
        </div>
        {/* <Image
          src="/frame.jpg"
          alt=""
          className="header-image w-full object-cover h-[80vh]"
          layout="responsive"
          objectFit="cover"
          width={100}
          height={35}
        /> */}
        <div className="w-full h-[50vh] relative">
          <BlurImage image={blogs[0].img} />
        </div>
      </div>

      <div className=" flex flex-wrap py-6 justify-center px-20">
        {/* Posts Section */}
        <section className="w-full md:w-2/3 ">
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
              Next
              <i className="fas fa-arrow-right ml-2" />
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
    "public, s-maxage=3600, stale-while-revalidate=60"
  );
  let blogs = await Blogs.find({});
  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { blogs: JSON.parse(JSON.stringify(blogs)) }, // will be passed to the page component as props
  };
}
