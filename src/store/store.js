import cartSlice from "../features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "../features/mealSlice";

const store = configureStore({ reducer: { cart: cartSlice, meal: mealSlice } });

export default store;
