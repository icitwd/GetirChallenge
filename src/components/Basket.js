import React from "react";
import { useSelector } from "react-redux";
import useItems from "../hooks/use-items";

import { selectBasket } from "../redux/reducers/basketSlice";
import BasketItem from "./BasketItem";

const Basket = () => {
  const { totalBasketPrice } = useItems();
  const basket = useSelector(selectBasket);

  return (
    <div className="border-8 border-cyan-600 p-4 flex flex-col items-end space-y-4">
      <div>
        {basket.length > 0 &&
          basket.map((basketItem) => (
            <BasketItem key={basketItem.id} basketItem={basketItem} />
          ))}
        {basket.length === 0 && <p className="pr-20">Basket is empty.</p>}
      </div>

      {basket.length > 0 && (
        <div className="border-2 border-cyan-600 py-3 px-6 font-medium text-sm text-cyan-600">
          $ {totalBasketPrice}
        </div>
      )}
    </div>
  );
};

export default Basket;
