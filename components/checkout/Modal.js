/** @format */

import React, { useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import AdInput from "../utils/AdInput";
import Flex from "../utils/Flex";
import Select from "../utils/Select";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { EditAddressAtom, editAtom } from "../utils/AddressCard";
export const modalAtom = atom({
  key: "modalAtom",
  default: false,
});

function Modal({
  mutate,
  ad,
  address1,
  address2,
  city,
  state,
  zipcode,
  country,
  lastName,
  firstName,
  phone,
  email,
}) {
  const EditProduct = useRecoilValue(EditAddressAtom);
  console.log(EditProduct);
  const [edit, setEdit] = useRecoilState(editAtom);
  console.log("edit:", edit);

  const [showModal, setShowModal] = useRecoilState(modalAtom);
  const as = async () => {
    const resp = await fetch(
      "https://www.universal-tutorial.com/api/countries/",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ0ZXN0aGlzaXNjb29sdEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ4LTdYM1ZadXlRV1JHbkxGWnd4ZVJnX1ZyZERvV2tmYnNBN2dGeWhYTmFfbDMzOXRwSUN6SkFMZzBLcEJxY2J6VFBJIn0sImV4cCI6MTY2NDg5Mzc2Nn0.wkTuIzDVyRnS3hbSAqFOP3HZeP86QPjeiKXbix7bMw8",
          Accept: "application/json",
        },
      }
    );
    const data = await resp.json();

    return data;
  };
  // const { data, error } = useSWR(
  //   "https://www.universal-tutorial.com/api/countries/",
  //   as
  // );

  const { data: session } = useSession();

  const [address, setAddress] = React.useState(
    // edit
    //   ? {
    //       address1: EditProduct.address1,
    //       address2: EditProduct.address2,
    //       city: EditProduct.city,
    //       state: EditProduct.state,
    //       zipcode: EditProduct.zipcode,
    //       country: EditProduct.country,
    //       lastName: EditProduct.lastName,
    //       firstName: EditProduct.firstName,
    //       phone: EditProduct.phone,
    //       email: EditProduct.email,
    //     }
    //   :
    {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
    }
  );
  const handleChange = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const createAddress = async () => {
    const resp = await fetch("/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...address, userEmail: session?.user?.email }),
    });
    mutate([...ad, address]);
    const data = await resp.json();
    console.log(data);
  };
  return (
    <>
      <>
        <div
          className={`fixed inset-0 bg-black ${
            showModal ? "opacity-50" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
          //   onClick={onClose}
        />
        <div
          className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${
            showModal ? "opacity-100" : "pointer-events-none opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        >
          <div className="relative w-auto my-6 mx-auto ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">Add address</h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto z-50 overflow-scroll">
                <form className=" shadow-md rounded px-8 pt-6 pb-8 w-full flex flex-col items-start space-y-2">
                  <Flex>
                    <AdInput
                      name={"firstName"}
                      placeholder="First Name"
                      required={true}
                      onChange={handleChange}
                      value={address.firstName}
                    />
                    <AdInput
                      name={"lastName"}
                      placeholder="Last Name"
                      required={true}
                      onChange={handleChange}
                      value={address.lastName}
                    />
                  </Flex>
                  <Select
                    onchange={handleChange}
                    name={"country"}
                    value={address.country}
                    className="mt-4"
                    options={[
                      "India",
                      "China",
                      "Germany",
                      "Siberia",
                      "Indonesia",
                      "South America",
                    ]}
                  />
                  <Flex>
                    <AdInput
                      name={"address1"}
                      placeholder="Address 1"
                      required={true}
                      onChange={handleChange}
                      value={address.address1}
                    />
                    <AdInput
                      name={"address2"}
                      placeholder="Address 2 LandMark Street and etc. (Optional)"
                      required={true}
                      onChange={handleChange}
                      value={address.address2}
                    />
                  </Flex>
                  <Flex>
                    <AdInput
                      name={"city"}
                      placeholder="City"
                      onChange={handleChange}
                      value={address.city}
                      required={true}
                    />
                    <Select
                      options={["Delhi", "Mumbai", "Goa"]}
                      className="mt-10"
                      name={"state"}
                      value={address.state}
                      onchange={handleChange}
                      disabled={address.country === "Select Country"}
                    />
                  </Flex>
                  <AdInput
                    name={"zipcode"}
                    placeholder="Zipcode"
                    type={"number"}
                    required={true}
                    onChange={handleChange}
                    value={address.zipcode}
                  />
                  <AdInput
                    name={"phone"}
                    placeholder="Phone"
                    type={"number"}
                    required={true}
                    onChange={handleChange}
                    value={address.phone}
                  />
                  <p className="max-w-2xl text-xs">
                    Note: Your phone number is required to contact you about
                    shipping-related questions. Please read our Privacy Policy
                    for more information.
                  </p>
                  <AdInput
                    name={"email"}
                    placeholder="Email for the Order Notifications"
                    type={"email"}
                    required={true}
                    onChange={handleChange}
                    value={address.email}
                  />
                </form>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => {
                    setEdit(false);
                    setShowModal(false);
                  }}
                >
                  Close
                </button>
                <button
                  className="text-white bg-primary-1 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => {
                    createAddress();
                    setShowModal(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Modal;
