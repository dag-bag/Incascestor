/** @format */

import Link from "next/link";
import React from "react";
import Detail from "../../components/account/Detail";
import Sidebar from "../../components/account/Sidebar";

function Orderhistory() {
  return (
    <>
      <Detail />
      <div className="flex">
        <Sidebar />
        <div className="mt-10 space-y-4">
          <h1 className="font-bold text-[#333] text-3xl">Order History</h1>
          <p className="font-semibold text-[#333] text-xl">
            you don&apos;t have orders yet.
          </p>
          <Link href={"/"}>
            <button className="bg-[#333] text-white rounded-sm py-4 px-8 mt-4 w-[24rem]">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Orderhistory;
