import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsPagination from "../pagination/ProductsPagination";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <div className="flex flex-row flex-wrap bg-white p-2">
        {products.map((item) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </div>
      <div className="mx-auto">
        <ProductsPagination setProducts={(p) => setProducts(p)} />
      </div>
    </>
  );
};

export default ProductList;
