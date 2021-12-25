import React from "react";
import FriesList from "./FriesList";
import classes from './CardPage.module.css'

const AvailableFries = (props) => {
  const fries = props.fries.map((item) => (
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
