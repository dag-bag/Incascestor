/** @format */

import React from "react";

function Sideboxes({ label, Icon }) {
  return (
    <div className="flex   items-center border-t border-gray-400 p-4 cursor-pointer">
      <Icon className="mr-5 text-xl" />
      <h2>{label}</h2>
    </div>
  );
}

export default Sideboxes;
