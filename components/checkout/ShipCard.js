/** @format */

import React from "react";

function ShipCard({ Icon, Text, Title, IconText }) {
  return (
    <div className="h-[5rem] w-[20rem] bg-white border-2 border-primary-1 flex items-center justify-between px-4 cursor-pointer rounded-md mt-4">
      <div>
        <h5>{Title}</h5>
        <p className="text-primary-1 font-semibold">{Text}</p>
      </div>
      <div>
        {Icon ? (
          <Icon className="text-4xl text-gray-600" />
        ) : (
          <p className="font-bold text-3xl">{IconText}</p>
        )}
      </div>
    </div>
  );
}

export default ShipCard;
