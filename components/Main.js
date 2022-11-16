/** @format */

import React from "react";
import { fakeData } from "../atoms/fakedata";
import CaroselDaist from "./home/CaroselDaist";
import Carousel from "./home/Carousel";
import CoreValues from "./home/CoreValues";
import Features from "./home/Features";
import MainSlider from "./home/MainSlider";
import Mission from "./home/Mission";
import ReverseMissoin from "./home/ReverseMissoin";
import ThirdContainer from "./home/ThirdContainer";
import Video from "./home/Video";

function Main({ products }) {
  return (
    <main className="md:space-y-16">
      <MainSlider />
      <Carousel products={products} />
      <Mission
        title={"Somos"}
        description={
          "Fluffy alpaca wool plushies make the perfect cuddling companion Temperature-regulating slippers keep you comfortable year-round  Made with all-natural, sustainable materials Each purchase supports local Peruvian artisans"
        }
        image={"/assets/home/Artesano.jpg"}
        boxType="left-right"
      />
      <Carousel products={fakeData} />
      <Features />

      <ReverseMissoin
        title={"Nuestros productos"}
        description={
          "At Incancestory, our vision is to not only support the local Peruvians that make our products, but their communities as a whole. We’re inspired by their connection to nature and their simple lifestyle. However, many of these traditional communities live far below the poverty line and their way of life is under threat. Our commitment to fair trading means the local shepherds can afford to continue looking after their alpacas and artisans can support their families. We also invest a portion of our profits back into the community to provide education and skill training for a better future for generations to come."
        }
        image={"/assets/home/Group.png"}
      />
      <Carousel products={fakeData} />

      <ThirdContainer
        title={"¿Quieres comprar en grandes cantidades?"}
        description={
          "Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage."
        }
        image={"/assets/home/3toys.png"}
        boxType="center-center"
      />
      {/* <CaroselDaist /> */}
      {/* <CoreValues /> */}
    </main>
  );
}

export default Main;
