import React, { useReducer } from "react";
import CartContext from "./meal-context";

const defaultCartState = { items: [], totalPrice: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedtotalPrice =
      state.totalPrice + action.payload.price * action.payload.quantity;

    //adding quantity
    let updatedItems = [];
    if (state.items.find((item) => item.id === action.payload.id)) {
      updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      );
    } else {
      updatedItems = [...state.items, action.payload];
    }
    return { items: updatedItems, totalPrice: updatedtotalPrice };
  }
  return { defaultCartState };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const onAddItemHandler = (payload) => {
    dispatchCartState({ type: "ADD", payload });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: onAddItemHandler,
  };
  console.log("CART-PROVIDER:", cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

/////////resolve to update number of items
