/** @format */

import React from "react";
import Carousel from "./home/Carousel";
import CoreValues from "./home/CoreValues";
import Features from "./home/Features";
import MainSlider from "./home/MainSlider";
import Mission from "./home/Mission";
import ReverseMissoin from "./home/ReverseMissoin";
import Video from "./home/Video";

function Main({ products }) {
  return (
    <main className="md:space-y-16">
      <MainSlider />
      <Carousel products={products} />
      <Mission
        title={"Somos"}
        description={
          " Inca Ancestry was born with the mission to make a change in the lives of the Andean communities while helping them to maintain ancestral traditions alive by visibility to their finest artisans to the world."
        }
        image={"/assets/home/Artesano.jpg"}
        boxType="left-right"
      />
      <Features />
      <ReverseMissoin
        title={"Nuestros productos"}
        description={
          "Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage."
        }
        image={"/assets/home/Group.png"}
      />
      <Video />
      <Mission
        title={"¿Quieres comprar en grandes cantidades?"}
        description={
          "Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage."
        }
        image={"/assets/home/PEluches.jpg"}
        boxType="center-center"
      />
      <CoreValues />
    </main>
  );
}

export default Main;
