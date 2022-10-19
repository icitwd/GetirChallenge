import React from "react";

const PriceText = ({ price, currency = "$" }) => {
  return (
    <span className="text-cyan-600 font-medium text-sm">
      {currency} {price}
    </span>
  );
};

export default PriceText;
