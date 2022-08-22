/** @format */

import React from "react";
import CheckOutHeader from "../../components/checkout/CheckOutHeader";
import Input from "../../components/checkout/Input";

function Yourdata() {
  return (
    <>
      <CheckOutHeader level={2} />
      <div className="flex justify-center items-center flex-col">
        <Input type={"number"} placeholder="Enter your number" />
        <Input type={"text"} placeholder="Enter your surname" />
        <Input type={"email"} placeholder="Enter your email" />
        <Input type={"number"} placeholder="Enter your number" />
        <Input type={"number"} placeholder="Enter your number" />
        <Input type={"number"} placeholder="Enter your number" />
      </div>
    </>
  );
}

export default Yourdata;
