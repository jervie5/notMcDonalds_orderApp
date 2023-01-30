import React, { useState, useEffect } from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Header/Header";
import AvailableBurgers from "./components/Meals/AvailableBurgers";
import AvailableDrinks from "./components/Meals/AvailableDrinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableFries from "./components/Meals/AvailableFries";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/cart-actions";

function App() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        {showCart && <CartModal onClose={hideCartHandler} />}
        <Header onShow={showCartHandler} />

        <Routes>
          <Route path="/" element={<AvailableBurgers />} />
          <Route path="/drinks" element={<AvailableDrinks />} />
          <Route path="/fries" element={<AvailableFries />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
