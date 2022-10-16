import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="border-8 border-blue-600 p-4 flex flex-col items-end space-y-4">
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="border-2 py-3 px-6 border-blue-600 text-xs">Total</div>
    </div>
  );
};

export default Cart;
