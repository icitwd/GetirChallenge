import React from "react";

const PriceText = ({ price, currency = "$" }) => {
  return (
    <span className="text-blue-500 font-medium text-sm">
      {currency} {price}
    </span>
  );
};

export default PriceText;
