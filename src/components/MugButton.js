import React from "react";
import items from "../data/items2.json";
import { useState } from "react";

export default function MugButton(props) {
  const [itemType, setItemType] = useState();

  const ItemType = () => setItemType(props.children);
  const asd = items.filter((item) => item.itemType == props.children);
  return (
    <div>
      {" "}
      <button
        className="py-1 px-4 text-xs text-blue-400 rounded bg-gray-200"
        onClick={ItemType}
      >
        {props.children}
      </button>
    </div>
  );
}
