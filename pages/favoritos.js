/** @format */

import React from "react";
import Container from "../components/Container";
import H1 from "../components/H1";
import Product from "../components/Product";
import ProductCard from "../components/ProductCard";
import ProductContainer from "../components/ProductContainer";

function Favoritos() {
  return (
    <div>
      <H1>Favoritos</H1>
      <Container>
        <ProductContainer>
          <ProductCard fav={true} />
          <ProductCard fav={true} />
          <ProductCard fav={true} />
          <ProductCard fav={true} />
          <ProductCard fav={true} />
        </ProductContainer>
      </Container>
    </div>
  );
}

export default Favoritos;
