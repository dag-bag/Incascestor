/** @format */

import React from "react";

function ProductContainer(props) {
  return (
    <div className="grid px-2 grid-cols-2 md:grid-cols-3 gap-5 py-16">
      {props.children}
    </div>
  );
}

export default ProductContainer;
