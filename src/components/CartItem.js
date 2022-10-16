import React from "react";

import PriceText from "./PriceText";

const CartItem = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b space-x-12 px-2 py-4">
      <div className="flex flex-col space-y-1">
        <h3 className="text-xs">Example Product</h3>
        <PriceText price="14,99" />
      </div>

      <div className="flex flex-row items-center space-x-2">
        <button>-</button>
        <div className="p-2 bg-blue-700 text-white text-xs">1</div>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
