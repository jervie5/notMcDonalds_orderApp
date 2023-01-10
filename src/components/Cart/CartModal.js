import React from "react";
import Modal from "../../UI/Modal";
import classes from "./CartModal.module.css";
import { useSelector } from "react-redux";

const CartModal = (props) => {
  const selectCartItems = useSelector((state) => state.cart.items);
  const selectTotalPrice = useSelector((state) => state.cart.totalAmount);
  console.log("SELECTTOTALPRICE", selectTotalPrice);
  const totalPrice = selectTotalPrice.toFixed(2);

  const cartItems = selectCartItems.map((item) => (
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
