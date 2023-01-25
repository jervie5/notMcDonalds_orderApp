import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("meals/fetchData", async (meals) => {
  const response = await fetch(
    "https://notmcdo-mini-app-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();

  const burgers = [];
  const fries = [];
  const drinks = [];

  function sortMeals(str, arr) {
    for (const key in data) {
      if (key === str) {
        for (const item in data[key]) {
          arr.push({
            id: item,
            name: data[key][item].name,
            price: data[key][item].price,
            image: data[key][item].image,
          });
        }
      }
    }
  }

  sortMeals("burgers", burgers);
  sortMeals("fries", fries);
  sortMeals("drinks", drinks);

  return burgers;
  // return {
  //   drinks,
  //   burgers,
  //   fries,
  // };
});
