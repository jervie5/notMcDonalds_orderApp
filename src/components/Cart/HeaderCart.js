import React from "react";
import classes from "./HeaderCart.module.css";
import { useState, useEffect } from "react";

import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import { useSelector } from "react-redux";

const HeaderCart = (props) => {
  const [itemToShow, setItemToShow] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const selectItems = useSelector((state) => state.cart.items);
  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.shake : ""}`;
  const totalNumberItems = selectItems.reduce(
    (prevNum, currNum) => prevNum + currNum.quantity,
    0
  );

  useEffect(() => {
    if (selectItems.length > 0) {
      setItemToShow(true);
    } else if (selectItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const clearTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(clearTimer);
    };
  }, [selectItems]);

  return (
    <div>
      <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        {itemToShow && <span>{totalNumberItems}</span>}
      </button>
    </div>
  );
};

export default HeaderCart;
