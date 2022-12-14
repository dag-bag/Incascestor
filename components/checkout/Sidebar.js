/** @format */

import React from "react";

function Sidebar({ Subtotal }) {
  return (
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items(s):</span>
        <span className="font-semibold text-sm">{Subtotal}$</span>
      </div>
      <div className="flex justify-between mt-3 mb-5">
        <span className="font-semibold text-sm uppercase">Delivery:</span>
        <span className="font-semibold text-sm">40.00$</span>
      </div>
      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      <button className="bg-primary-1 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${parseInt(Subtotal) + 40}</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
