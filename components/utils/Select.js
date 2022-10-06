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
}) {
  let classs =
    className +
    ` form-select appearance-none block disabled:opacity-60
  w-full
  px-3
  py-3
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding bg-no-repeat
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`;
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      {" "}
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select
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
