import React from "react";

const SearchInput = ({ onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SearchInput;
