import React from "react";
import classes from "./CardPage.module.css";
import DrinksList from "./DrinksList";
import { useSelector } from "react-redux";

const AvailableDrinks = () => {
  const allDrinks = useSelector((state) => state.meal.drinks);
  const mealList = allDrinks.map((meal) => (
    <DrinksList
      key={meal.id}
      id={meal.id}
      name={meal.name}
      image={meal.image}
      price={meal.price}
    />
  ));

  return <section className={classes.cardPage}>{mealList}</section>;
};

export default AvailableDrinks;
