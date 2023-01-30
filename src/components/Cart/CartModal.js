import React from "react";
import Modal from "../../UI/Modal";
import classes from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../features/cartSlice";

const CartModal = (props) => {
  const selectCartItems = useSelector((state) => state.cart.items);
  const selectTotalPrice = useSelector((state) => state.cart.totalGrandPrice);
  const dispatch = useDispatch();

  const totalPrice = selectTotalPrice.toFixed(2);

  const addQuantityHandler = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
        totalPrice: item.quantity * item.price,
      })
    );
  };

  const removeItemHandler = (item) => {
    dispatch(removeItem(item.id));
  };

  const cartItems = selectCartItems.map((item) => (
    <React.Fragment key={item.id}>
      <div className={classes.summary}>
        <img src={item.image} alt="" />
        <div>
          <h4> {item.name}</h4> <p>Price: $ {item.price} </p>
          <p>Qty: {item.quantity}</p>
          <button
            className={classes.removeBtn}
            onClick={removeItemHandler.bind(this, item)}
          >
            -
          </button>
          <button
            className={classes.addBtn}
            onClick={addQuantityHandler.bind(this, item)}
          >
            +
          </button>
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
