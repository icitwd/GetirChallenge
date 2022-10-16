import React from "react";
import PriceText from "./PriceText";
import items from "../data/items.json";
export default function ProductCard({ name, price, currency }) {
  return (
    <div className="m-3 flex flex-col w-32 space-y-2" style={{ width: 124 }}>
      <div className="border-2 rounded-lg p-3">
        <div className="h-20 bg-gray-400" />
      </div>
      <PriceText price={price} />
      <h3 className="font-medium text-sm">{name}</h3>
      <button className="bg-blue-600 rounded w-full text-xs text-white py-1">
        Add
      </button>
    </div>
  );
}
