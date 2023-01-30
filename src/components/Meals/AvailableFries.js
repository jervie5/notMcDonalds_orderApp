import React from "react";
import FriesList from "./FriesList";
import classes from "./CardPage.module.css";
import { useSelector } from "react-redux";

const AvailableFries = () => {
  const allFries = useSelector((state) => state.meal.fries);

  const fries = allFries.map((item) => (
    <FriesList
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
    />
  ));
  return <section className={classes.cardPage}>{fries}</section>;
};

export default AvailableFries;
