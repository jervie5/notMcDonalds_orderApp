import React from "react";
import classes from "./HeaderCart.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/meal-context";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";

const HeaderCart = (props) => {
  const [itemToShow, setItemToShow] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.shake : ""}`;
  const crtContext = useContext(CartContext);
  const totalNumberItems = crtContext.items.reduce(
    (prevNum, currNum) => prevNum + currNum.quantity,
    0
  );

  useEffect(() => {
    if (crtContext.items.length > 0) {
      setItemToShow(true);
    } else if (crtContext.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const clearTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(clearTimer);
    };
  }, [crtContext.items]);

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
