import React from "react";

export default function FilterBox({ title, children }) {
  return (
    <div className="flex flex-col space-y-2" style={{ width: 296 }}>
      <h4 className="text-xs font-medium">{title}</h4>
      <div className="bg-white p-4 rounded-md">{children}</div>
    </div>
  );
}
