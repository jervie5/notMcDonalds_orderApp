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
      const meals = action.payload;
      const getAllMeals = (arr, str) => {
        for (const key in meals) {
          if (key === str) {
            for (const item in meals[key]) {
              arr.push({
                id: item,
                name: meals[key][item].name,
                price: meals[key][item].price,
                image: meals[key][item].image,
              });
            }
          }
        }
      };
      getAllMeals(state.burgers, "burgers");
      getAllMeals(state.fries, "fries");
      getAllMeals(state.drinks, "drinks");
    },
  },
});

export default mealSlice.reducer;
export const { getData } = mealSlice.actions;
