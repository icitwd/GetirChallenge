import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import useItems from "../hooks/use-items";
import {
  decrementBasketItem,
  incrementBasketItem,
} from "../redux/reducers/basketSlice";

import PriceText from "./PriceText";

const BasketItem = ({ basketItem }) => {
  const { items } = useItems();
  const dispatch = useDispatch();

  const product = useMemo(
    () => items.find((item) => item.slug === basketItem.id),
    [basketItem.id, items]
  );

  return (
    <div className="flex flex-row items-center justify-between border-b space-x-12 px-2 py-4">
      <div className="flex flex-col space-y-1">
        <h3 className="text-sm">{product.name}</h3>
        <PriceText price={product.price * basketItem.quantity} />
      </div>

      <div className="flex flex-row items-center space-x-2 text-xl text-cyan-600">
        <button onClick={() => dispatch(decrementBasketItem(basketItem.id))}>
          -
        </button>
        <div className="p-2 bg-cyan-600 text-white text-xs">
          {basketItem.quantity}
        </div>
        <button onClick={() => dispatch(incrementBasketItem(basketItem.id))}>
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
