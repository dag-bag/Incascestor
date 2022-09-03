/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { favAtom } from "../atoms/CartAtom";
import Container from "../components/Container";
import H1 from "../components/H1";

import ProductCard from "../components/ProductCard";
import ProductContainer from "../components/ProductContainer";

function Favoritos() {
  const favItems = useRecoilValue(favAtom);
  return (
    <div>
      <H1>Favoritos</H1>
      <Container>
        {favItems.length <= 0 && (
          <div className="h-[50vh] flex items-center justify-center">
            <h1 className="text-5xl text-center">No Fav Items</h1>
          </div>
        )}
        {favItems.length > 0 && (
          <ProductContainer>
            {favItems.map((i) => {
              return (
                <ProductCard
                  key={i.slug}
                  title={i.title}
                  id={i.slug}
                  img={i.img}
                  src={i.img}
                  desc={i.desc}
                  slug={i.slug}
                  category={i.category}
                  size={i.size}
                  price={i.price}
                  color={i.color}
                  fav={true}
                />
              );
            })}
            {/* <ProductCard fav={true} />
          <ProductCard fav={true} />
          <ProductCard fav={true} />
          <ProductCard fav={true} /> */}
          </ProductContainer>
        )}
      </Container>
    </div>
  );
}

export default Favoritos;
