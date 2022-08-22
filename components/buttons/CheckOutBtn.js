/** @format */

import React from "react";

function CheckOutBtn({ children }) {
  return (
    <div className="bg-[#333] text-white py-4 w-full md:w-auto text-center md:px-[7.6rem] cursor-pointer">
      {children}
    </div>
  );
}

export default CheckOutBtn;
