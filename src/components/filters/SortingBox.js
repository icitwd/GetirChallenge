import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import RadioInput from "../inputs/RadioInput";
import FilterBox from "./FilterBox";
import {
  selectSortByFilter,
  setSortBy,
} from "../../redux/reducers/filtersSlice";

const SortingBox = () => {
  const dispatch = useDispatch();
  const sortByFilter = useSelector(selectSortByFilter);

  const radioItems = useMemo(
    () => [
      { label: "Price low to high", value: "price_low_to_high" },
      { label: "Price high to low", value: "price_high_to_low" },
      { label: "New to old", value: "new_to_old" },
      { label: "Old to new", value: "old_to_new" },
    ],
    []
  );

  return (
    <FilterBox title="Sorting">
      <div className="flex flex-col space-y-4">
        {radioItems.map((radioItem) => (
          <RadioInput
            key={radioItem.value}
            name="sort-filter"
            label={radioItem.label}
            value={radioItem.value}
            checked={radioItem.value === sortByFilter}
            onChange={(value) => dispatch(setSortBy(value))}
          />
        ))}
      </div>
    </FilterBox>
  );
};

export default SortingBox;
