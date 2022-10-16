import React from "react";
import ProductCard from "./ProductCard";
import items from "../data/items2.json";
const ProductList = () => {
  return (
    <div className="flex flex-row flex-wrap bg-white p-2">
      {items.map((item) => (
        <ProductCard name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default ProductList;
