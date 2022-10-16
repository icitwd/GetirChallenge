import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex flex-row flex-wrap bg-white p-2">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
