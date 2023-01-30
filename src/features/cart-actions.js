import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./mealSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchMealsData = async () => {
      const response = await fetch(
        "https://notmcdo-mini-app-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("fetching data error");
      }

      const mealsData = await response.json();
      dispatch(getData(mealsData));
    };
    fetchMealsData();
  };
};
