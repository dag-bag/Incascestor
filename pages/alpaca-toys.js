/** @format */

import Head from "next/head";

import Filters from "../components/Filters";
import { filterAtom } from "../atoms/filterAtom";
import { useRecoilState } from "recoil";
import H1 from "../components/H1";
import Product from "../models/Product";
import mongoose from "mongoose";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const ProductCard = dynamic(() => import("../components/ProductCard"));

// import ProductCard from "../components/ProductCard";

function Peluches({ products }) {
  console.log(products);

  products.map((item) => {
    console.log({});
  });

  var [isSelected, setSelect] = useRecoilState(filterAtom);
  return (
    <div>
      <Head>
        <title>Incascestor - Peluchs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl  m-auto w-full relative">
        <div
          className={`w-full ${
            isSelected ? "h-auto md:h-[60vh]" : "h-0"
          } overflow-hidden absolute top-0 left-0 bg-white z-50 duration-200 transform `}
        >
          <Filters />
        </div>
        <H1>Peluches</H1>
        <div className="flex justify-end items-center">
          <button
            className="flex justify-center items-center  space-x-3 md:border border-black py-2 px-4"
            onClick={() => {
              setSelect(true);
            }}
          >
            <svg
              width={32}
              height={34}
              viewBox="0 0 32 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-[33.19px] relative cursor-pointer"
              preserveAspectRatio="none"
            >
              <path
                d="M15 16.9998L27 16.9997"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 16.9997L11 16.9998"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 7.6665L27 7.6664"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 7.6664L21 7.6665"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 4.55537L21 10.7776"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 26.3332L27 26.3333"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 26.3333L17 26.3332"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 29.4442L17 23.222"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 13.8887L11 20.111"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="w-11 h-[24.89px] text-base text-left text-[#333] hidden md:inline-flex">
              Filtrar
            </span>
          </button>
        </div>
        <div className="grid px-2 grid-cols-2 md:grid-cols-3 gap-5 py-16">
          <Suspense fallback={<div>Loading...</div>}>
            {products.map((item) => {
              return (
                <ProductCard
                  key={item._id}
                  title={item.title}
                  img={item.variant[0].img}
                  src={item.variant[0].img}
                  desc={item.desc}
                  slug={item.variant[0].slug}
                  category={item.category}
                  size={item.variant[0].sizes}
                  price={item.variant[0].price}
                  color={item.variant[0].color}
                />
                // <ProductCard
                //   key={item.variant[0].slug}
                //   title={item.title}
                //   img={item.variant[0].img}
                //   src={item.variant[0].img}
                //   desc={item.desc}
                //   slug={item.variant[0].slug}
                //   category={item.category}
                //   size={item.variant.sizes}
                //   price={item.variant[0].price}
                //   color={item.variant[0].color}
                // />
              );
            })}
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default Peluches;

export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let products = await Product.find({ category: "slipers" });
  // let tshirts = {};
  // for (let item of products) {
  //   if (item.title in tshirts) {
  //     if (
  //       !tshirts[item.title].color?.includes(item.color) &&
  //       item.availableQty > 0
  //     ) {
  //       await tshirts[item.title].color.push(item.color);
  //     }
  //     if (
  //       !tshirts[item.title].size?.includes(item.size) &&
  //       item.availableQty > 0
  //     ) {
  //       await tshirts[item.title].size.push(item.size);
  //     }
  //   } else {
  //     tshirts[item.title] = await JSON.parse(JSON.stringify(item));
  //     if (item.availableQty > 0) {
  //       tshirts[item.title].color = [item.color];
  //       tshirts[item.title].size = [item.size];
  //     }
  //   }
  // }
  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
    // revalidate: 60,
    // will be passed to the page component as props
  };
}
