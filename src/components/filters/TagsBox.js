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
                return <Checkbox key={tag} tags={tag} />;
              })}
          </div>
        </div>
      </FilterBox>
    </>
  );
};

export default TagsBox;
