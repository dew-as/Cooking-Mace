import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const removeItem = state.items.indexOf(action.payload);
      state.items.splice(removeItem, 1);
    },
    clearCart: () => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
