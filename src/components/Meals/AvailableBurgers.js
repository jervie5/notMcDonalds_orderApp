import React, { useState, useEffect } from "react";
import classes from "./CardPage.module.css";
import BurgersList from "./BurgersList";

const AvailableBurgers = (props) => {
  const burgerList = props.meals.map((burger) => (
    <BurgersList
      key={burger.id}
      id={burger.id}
      name={burger.name}
      image={burger.image}
      price={burger.price}
    />
  ));
  return (
    <div className={classes.cardPage}>
      {burgerList}
    </div>
  );
};

export default AvailableBurgers;
