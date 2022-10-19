import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";

import useItems from "../hooks/use-items";

const Header = () => {
  const { totalBasketPrice } = useItems();

  return (
    <header className="h-16 bg-cyan-600 flex flex-row justify-center items-center">
      <div className="w-9/12 h-full flex flex-row justify-between items-center">
        <h1 className="text-white font-bold mx-auto font-mono text-3xl ">
          market
        </h1>
        <div className="bg-cyan-800 flex flex-row items-center justify-center h-full px-8 space-x-2">
          <LockClosedIcon className="h-4 w-4 text-white" />{" "}
          <span className="text-sm text-white">$ {totalBasketPrice}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
