/** @format */

import React from "react";

function ShipContainer({ children, className }) {
  const classes = `p-10 max-w-6xl bg-gray-50 mb-2 ${className} `;
  return <div className={classes}>{children}</div>;
}

export default ShipContainer;
