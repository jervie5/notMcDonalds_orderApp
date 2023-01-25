import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meal",
  initialState: {
    burgers: [],
    fries: [],
    drinks: [],
  },
  reducers: {
    getData: (state, action) => {
      const newItem = action.payload;
      state.burgers = newItem;
    },
  },
});

export default mealSlice.reducer;
export const { getData } = mealSlice.actions;
