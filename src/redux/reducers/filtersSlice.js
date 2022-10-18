import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brands: [],
    tags: [],
    sortBy: "price_low_to_high",
    itemTypes: [],
  },
  reducers: {
    setBrandFilters: (state, action) => {
      state.brands = [...action.payload];
    },
    addBrandFiltersBulk: (state, action) => {
      const bulkList = [...state.brands, ...action.payload];
      state.brands = [...new Set(bulkList)];
    },
    addBrandFilter: (state, action) => {
      state.brands.push(action.payload);
    },
    removeBrandFilter: (state, action) => {
      const filteredList = state.brands.filter(
        (item) => item !== action.payload
      );
      state.brands = [...filteredList];
    },
    resetBrandFilters: (state) => {
      state.brands = [];
    },
    setTagFilters: (state, action) => {
      state.tags = [...action.payload];
    },
    addTagFiltersBulk: (state, action) => {
      const bulkList = [...state.tags, ...action.payload];
      state.tags = [...new Set(bulkList)];
    },
    addTagFilter: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTagFilter: (state, action) => {
      const filteredList = state.tags.filter((item) => item !== action.payload);
      state.tags = [...filteredList];
    },
    resetTagFilters: (state) => {
      state.tags = [];
    },

    addItemTypeFilter: (state, action) => {
      if (state.itemTypes.includes(action.payload)) {
        const filteredList = state.itemTypes.filter(
          (item) => item !== action.payload
        );

        state.itemTypes = [...filteredList];
      } else {
        state.itemTypes.push(action.payload);
      }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  setBrandFilters,
  addBrandFiltersBulk,
  addBrandFilter,
  removeBrandFilter,
  resetBrandFilters,
  setTagFilters,
  addTagFiltersBulk,
  addTagFilter,
  removeTagFilter,
  resetTagFilters,
  addItemTypeFilter,
  setSortBy,
} = filtersSlice.actions;

export const selectBrandFilters = (state) => state.filters.brands;
export const selectTagFilters = (state) => state.filters.tags;
export const selectSortByFilter = (state) => state.filters.sortBy;
export const selectItemTypesFilter = (state) => state.filters.itemTypes;

export default filtersSlice.reducer;
