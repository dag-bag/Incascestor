/** @format */

import React, { Suspense, useState, useEffect } from "react";

import Btn from "../../components/account/Btn";
import Detail from "../../components/account/Detail";
import Sidebar from "../../components/account/Sidebar";
import Modal, { modalAtom } from "../../components/checkout/Modal";

// import dynamic from "next/dynamic";
// const Modal = dynamic(() => import("../../components/checkout/Modal"), {
//   suspense: true,
// });
import { useSession } from "next-auth/react";
import useSWR from "swr";
import AddressCard from "../../components/utils/AddressCard";
import { atom, useSetRecoilState } from "recoil";

function AddressBook() {
  // const setShowModal = useSetRecoilState(modalAtom);
  const setShowModal = useSetRecoilState(modalAtom);
  const { data: session } = useSession();
  const fetchAddress = async () => {
    const res = await fetch("/api/address?email=" + session?.user?.email);
    const data = await res.json();
    return data;
  };
  const { data, error, mutate } = useSWR(
    "/api/address?email=" + session?.user?.email,
    fetchAddress
  );

  console.log(data);
  return (
    <div>
      <Detail />
      <div className="flex ">
        <Sidebar />
        <div className=" mt-8 space-y-5">
          <h1 className="font-bold text-[#333] text-3xl">Address book</h1>
          {data?.map((item, i) => {
            return <AddressCard {...item} key={i} mutate={mutate} da={data} />;
          })}

          <Btn
            text={"Add another address"}
            onClick={() => setShowModal(true)}
          />
          <Suspense fallback={<p>Loading...</p>}>
            <Modal mutate={mutate} ad={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AddressBook;
