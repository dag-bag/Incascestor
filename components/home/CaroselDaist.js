/** @format */

import React, { useState } from "react";
import ProductCard from "../ProductCard";

function CaroselDaist() {
  let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

  const [slide, setSlides] = useState(1);
  const next = () => {
    if (slide === 1) {
      setSlides(slide + isEven(products.length));
    }
  };
  const isEven = (n) => {
    if (n % 2 === 0) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div className="relative">
      <a
        href={`#hello${slide}`}
        className={`hidden md:inline-flex  absolute top-1/2  transform left-7  -translate-y-1/2 ${
          slide === 0 && "pointer-events-none opacity-30"
        }`}
      >
        ❮
      </a>
      <a
        href={`#hello${slide}`}
        className={`hidden md:inline-flex  absolute top-1/2  transform right-7  -translate-y-1/2 ${
          slide === products.length && "pointer-events-none opacity-30"
        }`}
        onClick={() => setSlides(slide + isEven(products.length))}
      >
        ❯
      </a>
      <div className="carousel carousel-center max-w-[90%]  m-auto p-4 space-x-4  rounded-box relative">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              id={`hello${index + 1}`}
              className="carousel-item min-w-[px] min-h-[300px] relative"
            >
              <ProductCard
                slug={"this-sis"}
                img={["/test.jpg"]}
                price={100}
                title={"Alpaca Shoes."}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CaroselDaist;
