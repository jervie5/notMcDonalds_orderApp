import React from "react";
import CartContext from "../../store/meal-context";
import { useContext, useState } from "react";
import Modal from "../../UI/Modal";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
  const crtContext = useContext(CartContext);
  const totalPrice =  crtContext.totalPrice.toFixed(2);
  console.log(crtContext);

  const cartItems = crtContext.items.map((item) => (
    <React.Fragment key={item.id}>
      <div className={classes.summary}>
        <img src={item.image} alt="" />
        <div>
          <h4> {item.name}</h4> <p>Price: $ {item.price} </p>
          <p>Qty: {item.quantity}</p>
        </div>
      </div>
        <hr />
    </React.Fragment>
  ));

  return (
    <Modal onClose={props.onClose}>
      <h3>Your Cart Items</h3>
      <div className={classes.cartItems}>{cartItems}</div>
      <h4>Total Price</h4>
      <p>$ {totalPrice}</p>
      <button className={classes.cancel} onClick={props.onClose}>
        Close
      </button>
      <button className={classes.confirm}>Confirm</button>
    </Modal>
  );
};

export default CartModal;
