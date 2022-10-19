import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "../checkbox/Checkbox";
import SearchInput from "../inputs/SearchInput";
import FilterBox from "./FilterBox";
import items from "../../data/items.json";
import {
  addTagFilter,
  addTagFiltersBulk,
  removeTagFilter,
  resetTagFilters,
  selectTagFilters,
} from "../../redux/reducers/filtersSlice";

const TagsBox = () => {
  const tagsArray = items.map((item) => item.tags);
  const tagsFlat = tagsArray.flat();
  const itemsData = Array.from(new Set(tagsFlat));

  const tagFilters = useSelector(selectTagFilters);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const tags = useMemo(
    () => itemsData.filter((tag) => tag.toLowerCase().startsWith(query)),
    [query]
  );

  const isAllChecked = useMemo(
    () => tagFilters.length === tags.length,
    [tagFilters.length, tags.length]
  );

  return (
    <>
      <FilterBox title="Tags">
        <div className="flex flex-col space-y-4">
          <SearchInput
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tag name"
          />
          <div
            className="flex flex-col overflow-y-scroll"
            style={{ height: 142 }}
          >
            {!query && (
              <Checkbox
                label="All"
                onChange={() =>
                  (tagFilters.length > 0 && !isAllChecked) ||
                  tagFilters.length === 0
                    ? dispatch(addTagFiltersBulk(tags.map((tag) => tag)))
                    : dispatch(resetTagFilters())
                }
                checked={!isAllChecked}
              />
            )}
            {tags.map((tag) => {
              return (
                <Checkbox
                  key={tag}
                  label={tag}
                  count=""
                  onChange={(isChecked) =>
                    isChecked
                      ? dispatch(addTagFilter(tag))
                      : dispatch(removeTagFilter(tag))
                  }
                  checked={tagFilters.includes(tag)}
                />
              );
            })}
          </div>
        </div>
      </FilterBox>
    </>
  );
};

export default TagsBox;
