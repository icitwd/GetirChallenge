import React, { useState } from "react";

import Checkbox from "../Checkbox";
import SearchInput from "../SearchInput";
import FilterBox from "./FilterBox";
import items from "../../data/items.json";
const TagsBox = () => {
  const x = items.map((item) => item.tags);
  const y = x.flat();
  const z = Array.from(new Set(y));
  const [query, setQuery] = useState("");

  const totalCount = [];
  y.map((duplicated) => {
    totalCount[duplicated] = (totalCount[duplicated] || 0) + 1;
    return totalCount;
  });

  console.log(totalCount);
  return (
    <>
      <FilterBox title="Tags">
        <div className="flex flex-col space-y-4">
          <SearchInput onChange={(e) => setQuery(e.target.value)} />
          <div
            className="flex flex-col overflow-y-scroll"
            style={{ height: 142 }}
          >
            {z
              .filter((tag) => tag.toLowerCase().startsWith(query))
              .map((tag) => {
                return <Checkbox key={tag} tags={tag} count="5" />;
              })}
          </div>
        </div>
      </FilterBox>
    </>
  );
};

export default TagsBox;
