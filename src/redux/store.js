import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./reducers/filtersSlice";
import basketReducer from "./reducers/basketSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    basket: basketReducer,
  },
});

store.subscribe(() => console.log(store.getState()));
