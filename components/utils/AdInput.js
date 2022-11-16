/** @format */

import React from "react";
import Flex from "./Flex";

function AdInput({ type, onChange, value, placeholder, required, name }) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-600 " htmlFor={name}>
        {placeholder}
      </label>
      <input
        id={name}
        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={0}
      />

      {/* <input
        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400
          focus:text-white
          "
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={0}
      /> */}
    </div>
  );
}

export default AdInput;
