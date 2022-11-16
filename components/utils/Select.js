/** @format */

import React, { Suspense } from "react";
import { selector, useRecoilValue } from "recoil";
import { modalAtom } from "../checkout/Modal";

function Select({
  title,
  options,
  name,
  value,
  onchange,
  disabled,
  currentCategory,
  className,
  placeholder,
}) {
  let classs =
    className +
    ` form-select appearance-none block disabled:opacity-60
   md:w-[92%]
   w-full
   
  px-3
  py-3
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding bg-no-repeat
  border border-gray-200 rounded-md     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40
  
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`;
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      {" "}
      <div className="">
        <div className="mb-3 w-full md:w-96">
          <label
            className="block  text-sm text-gray-600 mt-4 pb-1"
            htmlFor={name}
          >
            {placeholder}
          </label>
          <select
            id="name"
            disabled={disabled}
            className={classs}
            aria-label="Default select example"
            value={value}
            onChange={onchange}
            name={name}
          >
            <option value="Select Country">Select Country</option>
            {options.map((option) => {
              return <option key={option}>{option}</option>;
            })}
          </select>
        </div>
      </div>
    </Suspense>
  );
}

export default Select;
