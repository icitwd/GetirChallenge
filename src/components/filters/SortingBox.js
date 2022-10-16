import React from "react";

import RadioInput from "../RadioInput";
import FilterBox from "./FilterBox";

const SortingBox = () => {
  return (
    <FilterBox title="Sorting">
      <div className="flex flex-col">
        <RadioInput />
        <RadioInput />
        <RadioInput />
        <RadioInput />
      </div>
    </FilterBox>
  );
};

export default SortingBox;
