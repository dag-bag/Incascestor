/** @format */

import React, { useState } from "react";

import Container from "../../components/checkout/Container";

import Modal, { modalAtom } from "../../components/checkout/Modal";
import { FaRegBuilding } from "react-icons/fa";

import ShipContainer from "../../components/checkout/ShipContainer";
import AddressInfo from "../../lib/Address";
import {
  BsFillCheckCircleFill,
  BsPaypal,
  BsFillPatchCheckFill,
} from "react-icons/bs";
import { getSession } from "next-auth/react";

import Btn from "../../components/account/Btn";
import { useRecoilState, useSetRecoilState } from "recoil";
import Sidebar from "../../components/checkout/Sidebar";
import AddressCard from "../../components/checkout/AddressCard";
import Image from "next/image";
import { BlurImage } from "../../components/BlurImage";
import Pay from "./pay";
import { shipAddressAtom } from "../../atoms/CheckOutState";
function Yourdata({ Cart, clearCart, SubTotal }) {
  const [address, setAddress] = useRecoilState(shipAddressAtom);
  const setShowModal = useSetRecoilState(modalAtom);
  const { data, mutate } = AddressInfo();
  const [active, setActive] = useState("");
  const [state, setState] = useState(1);
  const [edit, setEdit] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [x, Setx] = useState({
    1: "Pending",
    2: "Pending",
    3: "Pending",
  });
  console.log(state);

  const [complete, setComplete] = useState(false);
  return (
    <div className="flex">
      {/* <CheckOutHeader level={2} /> */}
      <div className="">
        <ShipContainer className="space-y-4 relative">
          {state === 1 && (
            <>
              <Container
                Title={"Address"}
                Question="Please Select Your Address ?"
                Level={1}
                ShipCardData={[
                  {
                    Title: "Ship To",
                    Text: "Your Location",
                    Icon: FaRegBuilding,
                  },
                ]}
              />
              <div className="ml-14 mt">
                <h4 className="font-semibold ">Ship to Your Location</h4>
                <p className="text-xs font-light">
                  Have your order delivered to your home, office or anywhere. We
                  work with a number of different carriers & will ship via the
                  one who can best meet your delivery needs.
                </p>
                <Btn
                  className={"rounded-md"}
                  text={"Add another address"}
                  onClick={() => setShowModal(true)}
                />
                <div className="flex items-center space-x-2 flex-wrap">
                  {data?.map((item, i) => {
                    return (
                      <AddressCard
                        {...item}
                        key={i}
                        mutate={mutate}
                        da={data}
                        index={i}
                        active={active}
                        onClick={() => {
                          setActive(item._id);
                          setAddress(item);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <button
                className="absolute bottom-3 right-5 bg-primary-1 rounded-md py-2 px-4 text-white disabled:opacity-50 cursor-pointer"
                disabled={true ? !active : true}
                onClick={() => {
                  setState(2);
                  Setx({ ...x, 1: "Complete" });
                  setComplete(true);
                }}
              >
                Continue to delivery
              </button>
            </>
          )}
          {x[1] === "Complete" && (
            <div className="min-w-[1040px] flex justify-start items-start space-x-2 relative">
              <h1 className="flex items-center  text-3xl font-semibold mt-6 mr-4">
                <BsFillPatchCheckFill className=" text-green-600 w-10 h-10 rounded-full flex justify-center items-center mr-4"></BsFillPatchCheckFill>
                {"Address"}
              </h1>
              <div className="">
                <AddressCard
                  {...address}
                  mutate={mutate}
                  da={data}
                  index={0}
                  complete
                />
              </div>
              <div className="flex-none  pt-2.5 pr-2.5 pl-1 absolute top-0 right-3">
                <button
                  type="button"
                  className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95 flex space-x-2"
                  onClick={() => {
                    setState(1);
                    Setx({ ...x, 1: "Pending" });
                  }}
                >
                  <span>Edit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3" />
                    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <Modal ad={data} mutate={mutate} />
        </ShipContainer>
        <ShipContainer className={"relative"}>
          {state == 1 ||
            (state == 3 && (
              <h1 className="flex items-center  text-3xl font-semibold">
                <span className="bg-[#333] w-10 h-10 rounded-full  text-white flex justify-center items-center mr-4 opacity-50">
                  {2}
                </span>
                {"Delivery"}
              </h1>
            ))}

          {state === 2 && (
            <>
              {" "}
              <Container
                Title={"Delivery"}
                Question="How soon you would like to receive the products? ?"
                Level={2}
                ShipCardData={[
                  {
                    Title: "Get It By",
                    Text: "Normal Delivery",
                    IconText: "40.8$",
                  },
                  {
                    Title: "Get It By",
                    Text: "Express Delivery",
                    IconText: "70.8$",
                  },
                ]}
              />
              <div className="mx-16">
                {Object.keys(Cart).map((k) => {
                  return (
                    <li key={k} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0 ">
                        <Image
                          src={Cart[k].img[0]}
                          alt="Front of men's Basic Tee in sienna."
                          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                          width={150}
                          height={150}
                        />
                        <div className="w-[77px] h-[21px] flex space-x-1 items-center mt-2 cursor-pointer relative justify-center ml-10">
                          {/* <img src="/cart.png" alt="" /> */}
                          <BlurImage image={"/cart.png"} />
                        </div>
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <p className="text-left text-black">
                                  <span className="text-2xl font-semibold text-left text-black">
                                    {Cart[k].name}
                                  </span>
                                  <br />
                                  <span className="text-lg font-medium text-left text-black">
                                    Color :
                                  </span>
                                  <span className=" font-light text-left text-black">
                                    {" "}
                                    {Cart[k].variant}
                                  </span>
                                  <br />
                                  <span className="text-lg font-medium text-left text-black">
                                    Cantidad :{" "}
                                  </span>
                                  <span className=" font-light text-left text-black">
                                    {Cart[k].qty}
                                  </span>
                                  <br />
                                  <span className="text-lg font-medium text-left text-black">
                                    Talla :
                                  </span>
                                  <span className=" font-light text-left text-black">
                                    {" "}
                                    {Cart[k].size}
                                  </span>
                                  <br />
                                  <br />
                                  <span className="text-sm font-light text-left text-black">
                                    REF. 8704403-incan-Mini
                                  </span>
                                </p>
                              </h3>
                            </div>
                          </div>
                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label htmlFor="quantity-0" className="sr-only">
                              Quantity, Basic Tee
                            </label>

                            <div className="absolute top-0 right-0">
                              {/* Heroicon name: solid/x */}
                              <h4 className="text-2xl font-medium text-left text-black">
                                {Cart[k].price} $
                              </h4>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 flex text-sm  items-center text-gray-700 space-x-2">
                          {/* Heroicon name: solid/check */}
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-medium text-lg">In stock</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </div>
              <button
                className="absolute bottom-3 right-5 bg-primary-1 rounded-md py-2 px-4 text-white disabled:opacity-50 cursor-pointer"
                disabled={true ? !active : true}
                onClick={() => {
                  setState(3);

                  Setx({ ...x, 2: "Complete" });
                }}
              >
                Continue to Payment
              </button>
            </>
          )}
          {x[2] === "Complete" && (
            <div className="min-w-[1040px] flex justify-start items-start space-x-2 relative">
              <h1 className="flex items-center  text-3xl font-semibold mt-6 mr-4">
                <BsFillCheckCircleFill className=" text-green-500 w-10 h-10 rounded-full flex justify-center items-center mr-4"></BsFillCheckCircleFill>
                {"Delivery"}
              </h1>
              <div>
                <h4 className="font-semibold mt-8">Expected Thu, Oct 13 </h4>
                <div className="mx-16">
                  {Object.keys(Cart).map((k) => {
                    return (
                      <li key={k} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0 ">
                          <Image
                            src={Cart[k].img[0]}
                            alt="Front of men's Basic Tee in sienna."
                            className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                            width={150}
                            height={150}
                          />
                          <div className="w-[77px] h-[21px] flex space-x-1 items-center mt-2 cursor-pointer relative justify-center ml-10">
                            {/* <img src="/cart.png" alt="" /> */}
                            <BlurImage image={"/cart.png"} />
                          </div>
                        </div>
                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <p className="text-left text-black">
                                    <span className="text-2xl font-semibold text-left text-black">
                                      {Cart[k].name}
                                    </span>
                                    <br />
                                    <span className="text-lg font-medium text-left text-black">
                                      Color :
                                    </span>
                                    <span className=" font-light text-left text-black">
                                      {" "}
                                      {Cart[k].variant}
                                    </span>
                                    <br />
                                    <span className="text-lg font-medium text-left text-black">
                                      Cantidad :{" "}
                                    </span>
                                    <span className=" font-light text-left text-black">
                                      {Cart[k].qty}
                                    </span>
                                    <br />
                                    <span className="text-lg font-medium text-left text-black">
                                      Talla :
                                    </span>
                                    <span className=" font-light text-left text-black">
                                      {" "}
                                      {Cart[k].size}
                                    </span>
                                    <br />
                                    <br />
                                    <span className="text-sm font-light text-left text-black">
                                      REF. 8704403-incan-Mini
                                    </span>
                                  </p>
                                </h3>
                              </div>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:pr-9">
                              <label htmlFor="quantity-0" className="sr-only">
                                Quantity, Basic Tee
                              </label>

                              <div className="absolute top-0 right-0">
                                {/* Heroicon name: solid/x */}
                                <h4 className="text-2xl font-medium text-left text-black">
                                  {Cart[k].price} $
                                </h4>
                              </div>
                            </div>
                          </div>
                          <p className="mt-4 flex text-sm  items-center text-gray-700 space-x-2">
                            {/* Heroicon name: solid/check */}
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-medium text-lg">
                              In stock
                            </span>
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className="flex-none  pt-2.5 pr-2.5 pl-1 absolute top-0 right-3">
                <button
                  type="button"
                  className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95 flex space-x-2"
                  onClick={() => {
                    setState(2);
                    Setx({ ...x, 2: "Pending" });
                  }}
                >
                  <span>Edit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3" />
                    <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </ShipContainer>
        <ShipContainer>
          <Container
            Title={"Payment"}
            Question="How do you want to pay? ?"
            Level={3}
            ShipCardData={[
              {
                Text: "Paypal",
                Icon: BsPaypal,
              },
            ]}
          />
          <Pay Cart={Cart} clearCart={clearCart} SubTotal={SubTotal} />
        </ShipContainer>
      </div>
      <Sidebar Subtotal={SubTotal} />
    </div>
  );
}

export default Yourdata;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
