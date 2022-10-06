/** @format */

import React from "react";

function Flex({ children }) {
  return (
    <div className="flex justify-evenly items-center space-x-2">{children}</div>
  );
}

export default Flex;
