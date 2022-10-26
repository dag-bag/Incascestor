/** @format */

import React from "react";
import ProductCard from "../ProductCard";

function CaroselDaist() {
  return (
    <div className="relative">
      <a
        href="#slide4"
        className="hidden md:inline-flex btn btn-circle absolute top-1/2  transform left-7  -translate-y-1/2"
      >
        ❮
      </a>
      <a
        href="#slide5"
        className="hidden md:inline-flex btn btn-circle absolute top-1/2  transform right-7  -translate-y-1/2"
      >
        ❯
      </a>
      <div className="carousel carousel-center max-w-7xl  m-auto p-4 space-x-4  rounded-box relative">
        <div
          id="slide1"
          className="carousel-item min-w-[px] min-h-[300px] relative"
        >
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>
        <div
          id="slide1"
          className="carousel-item min-w-[px] min-h-[300px] relative"
        >
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>
        <div
          id="slide1"
          className="carousel-item min-w-[px] min-h-[300px] relative"
        >
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>
        <div
          id="slide1"
          className="carousel-item min-w-[px] min-h-[300px] relative"
        >
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>
        <div
          id="slide1"
          className="carousel-item min-w-[px] min-h-[300px] relative"
        >
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>
        <div
          id="slide1"
          className="carousel-item min-w-[px] min-h-[300px] relative"
        >
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>

        <div className="carousel-item min-w-[300px] min-h-[300px] relative">
          <ProductCard
            slug={"/helo"}
            img={["/test.jpg"]}
            price={100}
            title={"Alpaca Shoes."}
          />
          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}

          {/* <img src="https://placeimg.com/250/180/arch" className="rounded-box " /> */}
        </div>
      </div>
    </div>
  );
}

export default CaroselDaist;
