import classNames from "classnames";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addBasketItem,
  removeBasketItem,
  selectBasket,
} from "../../redux/reducers/basketSlice";
import PriceText from "../common/PriceText";

export default function ProductCard({ product }) {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();

  const isAddedToBasket = useMemo(
    () => basket.map((basketItem) => basketItem.id).includes(product.slug),
    [basket, product]
  );

  return (
    <div
      className="m-3 flex flex-col justify-between w-32 space-y-2"
      style={{ width: 124 }}
    >
      <div className="flex flex-col space-y-2">
        <div className="border-2 rounded-lg p-3">
          <img alt="" src="https://picsum.photos/200" className="w-full" />
        </div>
        <PriceText price={product.price} />
        <h3 className="font-medium text-sm">{product.name}</h3>
      </div>

      <button
        className={classNames(
          "rounded border border-cyan-600 w-full text-xs text-white py-1",
          isAddedToBasket ? "bg-white text-black" : "bg-cyan-600 text-white"
        )}
        onClick={() =>
          isAddedToBasket
            ? dispatch(removeBasketItem(product.slug))
            : dispatch(addBasketItem(product.slug))
        }
      >
        {isAddedToBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
}
