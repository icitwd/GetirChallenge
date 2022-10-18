import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addBasketItem: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (slug) => {
        return { payload: { id: slug, quantity: 1 } };
      },
    },
    incrementBasketItem: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementBasketItem: (state, action) => {
      const foundItem = state.find((item) => item.id === action.payload);

      if (foundItem.quantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      }

      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    removeBasketItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addBasketItem,
  incrementBasketItem,
  decrementBasketItem,
  removeBasketItem,
} = basketSlice.actions;

export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
