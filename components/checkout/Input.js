/** @format */

import React from "react";

function Input({ type, placeholder, value, onChange }) {
  return (
    <div className="mt-1">
      <input
        id={type}
        name={type}
        type={type}
        autoComplete={type}
        required=""
        placeholder={placeholder}
        className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-2 border-[#333] placeholder:text-[#333]"
      />
    </div>
  );
}

export default Input;
