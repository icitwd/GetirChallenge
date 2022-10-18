import classNames from "classnames";
import React from "react";

export default function ItemTypeButton({ text, onClick, selected = true }) {
  return (
    <button
      className={classNames(
        "py-1 px-4 text-xs rounded",
        selected ? "text-gray-200 bg-cyan-600" : "text-cyan-600 bg-gray-200"
      )}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
