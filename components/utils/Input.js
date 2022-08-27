/** @format */

import React from "react";

function Input({ type, placeholder, name, value, onChange, required }) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      autoComplete={name}
      required={required}
      placeholder={placeholder}
      className="block w-full px-5 py-4 text-xs  transition duration-500 ease-in-out transform  text-[#333]  border-[#333] focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border  placeholder:text-gray-500 outline-none"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}

export default Input;
