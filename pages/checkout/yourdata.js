/** @format */

import React from "react";
import CheckOutHeader from "../../components/checkout/CheckOutHeader";
import Input from "../../components/checkout/Input";
import Modal from "../../components/checkout/Modal";

function Yourdata() {
  return (
    <>
      <CheckOutHeader level={2} />
      <div className="flex justify-center items-center flex-col">
        <Modal />
      </div>
    </>
  );
}

export default Yourdata;
