import React from "react";
import classes from "./CardPage.module.css";
import DrinksList from "./DrinksList";

const AvailableDrinks = (props) => {
  const mealList = props.drinks.map((meal) => (
    <DrinksList
      key={meal.id}
      id={meal.id}
      name={meal.name}
      image={meal.image}
      price={meal.price.toFixed(2)}
    />
  ));

  return <section className={classes.cardPage}>{mealList}</section>;
};

export default AvailableDrinks;
