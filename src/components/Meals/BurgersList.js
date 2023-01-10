import React from "react";
import Card from "../../UI/Card";
import classes from "./CardPage.module.css";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const BurgersList = (props) => {
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.name,
        image: props.image,
        price: props.price,
        quantity: 1,
      })
    );
  };
  return (
    <Card>
      <h3>{props.name}</h3>
      <img src={props.image} alt="burgerList" />
      <p>$ {props.price}</p>
      <button className={classes.selectBtn} onClick={addItems}>
        Select
      </button>
    </Card>
  );
};

export default BurgersList;
