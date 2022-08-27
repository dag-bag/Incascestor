/** @format */

import React from "react";

function CheckBox({ label }) {
  return (
    <>
      <div className="flex  mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          defaultValue=""
          className="w-4 h-4 text- bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-xs font-medium text-gray-900 "
        >
          {label}
        </label>
      </div>
    </>
  );
}

export default CheckBox;
