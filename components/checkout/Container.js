/** @format */

import React from "react";

import ShipCard from "./ShipCard";

function Container({ Question, Title, Level, ShipCardData }) {
  return (
    <>
      <h1 className="flex items-center  text-3xl font-semibold">
        <span className="bg-[#333] w-10 h-10 rounded-full  text-white flex justify-center items-center mr-4">
          {Level}
        </span>
        {Title}
      </h1>
      <div className="bg-gray-200 h-52 w-full mt-2 max-w-4xl ml-14 p-7 rounded-md">
        <h4 className="text-xl font-medium">{Question}</h4>
        <div className="flex space-x-4">
          {ShipCardData?.map((item, i) => {
            return (
              <ShipCard
                Title={item.Title}
                Text={item.Text}
                Icon={item.Icon}
                key={i}
                IconText={item.IconText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Container;
