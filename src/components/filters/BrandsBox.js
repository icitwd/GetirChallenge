import React, { useState } from "react";

import Checkbox from "../Checkbox";
import SearchInput from "../SearchInput";
import FilterBox from "./FilterBox";
import companies from "../../data/companies.json";

const BrandsBox = () => {
  const [query, setQuery] = useState("");
  return (
    <FilterBox title="Brands">
      <div className="flex flex-col space-y-4">
        <SearchInput onChange={(e) => setQuery(e.target.value)} />
        <div
          className="flex flex-col overflow-y-scroll"
          style={{ height: 142 }}
        >
          {companies
            .filter((com) => com.name.toLowerCase().startsWith(query))
            .map((company) => {
              return <Checkbox key={company.slug} name={company.name} />;
            })}
        </div>
      </div>
    </FilterBox>
  );
};

export default BrandsBox;
