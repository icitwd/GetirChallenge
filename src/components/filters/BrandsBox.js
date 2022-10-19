import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "../checkbox/Checkbox";
import SearchInput from "../inputs/SearchInput";
import FilterBox from "./FilterBox";
import companiesData from "../../data/companies.json";
import {
  addBrandFilter,
  addBrandFiltersBulk,
  removeBrandFilter,
  resetBrandFilters,
  selectBrandFilters,
} from "../../redux/reducers/filtersSlice";

const BrandsBox = () => {
  const brandFilters = useSelector(selectBrandFilters);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const companies = useMemo(
    () =>
      companiesData.filter((company) =>
        company.name.toLowerCase().startsWith(query)
      ),
    [query]
  );

  const isAllChecked = useMemo(
    () => brandFilters.length === companies.length,
    [brandFilters.length, companies.length]
  );

  return (
    <FilterBox title="Brands">
      <div className="flex flex-col space-y-4">
        <SearchInput
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search brand name"
        />
        <div
          className="flex flex-col overflow-y-scroll"
          style={{ height: 142 }}
        >
          {!query && (
            <Checkbox
              label="All"
              onChange={() =>
                (brandFilters.length > 0 && !isAllChecked) ||
                brandFilters.length === 0
                  ? dispatch(
                      addBrandFiltersBulk(
                        companies.map((company) => company.slug)
                      )
                    )
                  : dispatch(resetBrandFilters())
              }
              checked={!isAllChecked}
            />
          )}

          {companies.map((company) => (
            <Checkbox
              key={company.slug}
              label={company.name}
              onChange={(isChecked) =>
                isChecked
                  ? dispatch(addBrandFilter(company.slug))
                  : dispatch(removeBrandFilter(company.slug))
              }
              checked={brandFilters.includes(company.slug)}
            />
          ))}
        </div>
      </div>
    </FilterBox>
  );
};

export default BrandsBox;
