import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalAmount: 0,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const updatedtotalPrice =
        state.totalAmount + action.payload.price * action.payload.quantity;

      //adding quantity
      let updatedItems = [];
      if (state.items.find((item) => item.id === action.payload.id)) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }
      return { items: updatedItems, totalAmount: updatedtotalPrice };
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
