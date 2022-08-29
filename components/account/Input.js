/** @format */

import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Input({ label, value, onChange, type, placeholder, error, name }) {
  return (
    <div className="border border-[#333] flex flex-col px-4 py-2 relative">
      <BsFillPatchCheckFill className="absolute right-5 top-6 text-green-500" />
      <label htmlFor="">{label}*</label>
      <input
        type="text"
        name={name}
        className={`outline-none ${
          value?.length <= 0 ? "text-red-500" : "text-[#333]"
        }`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
