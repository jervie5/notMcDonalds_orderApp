import React from "react";
import Card from "../../UI/Card";
import classes from "./CardPage.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const DrinksList = (props) => {
  const dispatch = useDispatch();
  const addItems = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: 1,
        image: props.image,
      })
    );
  };
  return (
    <Card>
      <h3>{props.name}</h3>
      <img src={props.image} alt="drinks-images" />
      <p>${props.price}</p>
      <button className={classes.selectBtn} onClick={addItems}>
        Select
      </button>
    </Card>
  );
};

export default DrinksList;
