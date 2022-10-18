import React from "react";

const Checkbox = ({ label, onChange, checked = false }) => {
  return (
    <div className="flex items-center p-1">
      <input
        checked={checked}
        id={label}
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
        className="w-4 h-4 text-cyan-600 bg-gray-100 rounded border-cyan-600"
      />
      <label htmlFor={label} className="ml-2 text-sm font-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
