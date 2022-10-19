/** @format */

import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AddressCard from "../../../components/utils/AddressCard";
function Success() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR("/api/getorder?orderID=" + id, async (url) => {
    const response = await fetch(url);
    return response.json();
  });
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="md:w-[85%] md:ml-auto p-5">
        <div className="flex space-x-2">
          <AiOutlineCheckCircle className="text-6xl text-green-500" />
          <div>
            <h3 className="mt-1  text-gray-500">Order# {data?.orderID}</h3>
            <p>
              Thanks {data?.address?.firstName + " " + data?.address?.lastName}{" "}
            </p>
          </div>
        </div>
        <div className="ml-16">
          <div className="mt-5 bg-white shadow cursor-pointer rounded-xl max-w-3xl border border-gray-300 p-5">
            <h4 className=" text-xl">Your order is confirmed</h4>
            <p className="text-sm">
              You’ll receive a confirmation email with your order number
              shortly.
            </p>
          </div>
          <div className="mt-5 bg-white shadow cursor-pointer rounded-xl max-w-3xl border border-gray-300 p-5">
            <h4 className=" text-xl">Order updates</h4>
            <p className="text-sm">
              You’ll get shipping and delivery updates by email.
            </p>
          </div>
          <AddressCard
            {...data?.address}
            button={false}
            paymentMethod="Paypal"
            Title="Customer Details"
          />
        </div>
      </div>
      <div className="bg-gray-50 py-12 md:py-15">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <div className="mt-5">
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {data &&
                  Object.keys(data.products).map((k) => {
                    return (
                      <li
                        className="flex items-center justify-between py-4"
                        key={k}
                      >
                        <div className="flex items-start">
                          <img
                            alt="Trainer"
                            src={data.products[k].img[0]}
                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          />
                          <div className="ml-4">
                            <p className="text-sm">{data.products[k].name}</p>
                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">
                                  {data.products[k].variant}
                                </dd>
                              </div>
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">
                                  {data.products[k].size}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm">
                            $ {data.products[k].price}.00
                            <small className="text-gray-500">
                              x {data.products[k].qty}
                            </small>
                          </p>
                        </div>
                      </li>
                    );
                  })}

                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <p className="text-sm">SubTotal</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">${data?.total}.00</p>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <p className="text-sm">Shipping</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">$40.00</p>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 ">
                  <div className="flex items-start">
                    <div className="ml-4">
                      <p className="text-xl">Total</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl">${data?.total + 40}.00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
