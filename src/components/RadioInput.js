import React from "react";

const RadioInput = ({ label, value, checked, onChange, name }) => {
  return (
    <div className="flex items-center">
      <input
        id={`radio-${value}`}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300"
        onChange={(event) => onChange(event.target.value)}
      />
      <label
        htmlFor={`radio-${value}`}
        className="ml-2 text-sm font-sm text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
