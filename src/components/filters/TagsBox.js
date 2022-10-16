import React from "react";

import Checkbox from "../Checkbox";
import SearchInput from "../SearchInput";
import FilterBox from "./FilterBox";

const TagsBox = () => {
  return (
    <FilterBox title="Tags">
      <div className="flex flex-col space-y-4">
        <SearchInput />
        <div
          className="flex flex-col overflow-y-scroll"
          style={{ height: 142 }}
        >
          <Checkbox />
          <Checkbox />
          <Checkbox />
          <Checkbox />
        </div>
      </div>
    </FilterBox>
  );
};

export default TagsBox;
