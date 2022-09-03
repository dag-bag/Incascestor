/** @format */

import React from "react";
import Btn from "../../components/account/Btn";
import Detail from "../../components/account/Detail";
import Sidebar from "../../components/account/Sidebar";

function AddressBook() {
  return (
    <div>
      <Detail />
      <div className="flex ">
        <Sidebar />
        <div className=" mt-8 space-y-5">
          <h1 className="font-bold text-[#333] text-3xl">Address book</h1>

          <Btn text={"Add another address"} />
        </div>
      </div>
    </div>
  );
}

export default AddressBook;
