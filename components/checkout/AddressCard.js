/** @format */

import React from "react";

function AddressCard({
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
  _id,
  mutate,
  da,
  index,
  onClick,
  active,
}) {
  return (
    <div
      className="h-[20rem] w-[20rem] border border-gray-400 mt-3 p-5 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {" "}
      <h5 className="font-bold    flex items-center space-x-2">
        {active === _id ? (
          <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300 mr-2">
            <a
              href="#blue"
              className="block w-5 h-5 bg-primary-1  rounded-full "
            ></a>
          </span>
        ) : (
          <span className="bg-[#333] w-8 h-8 rounded-full  text-white flex justify-center items-center mr-4">
            {index + 1}
          </span>
        )}
        Shipping address
      </h5>
      <div className="ml-11">
        <p className="py-2">{`${firstName} ${lastName}`}</p>
        <p className="text-sm font-light">{address1}</p>
        <p className="text-sm font-light">{address2}</p>
        <p className="text-sm font-light">{`${city} ${state} ${zipcode}`}</p>
        <p className="text-sm font-light">{country}</p>
        <p className="text-sm font-light">{phone}</p>
        <p className="text-sm font-light">{email}</p>
      </div>
    </div>
  );
}

export default AddressCard;
