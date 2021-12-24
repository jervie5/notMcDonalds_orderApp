import { useState } from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Header/Header";
import AvailableBurgers from "./components/Meals/AvailableBurgers";
import AvailableDrinks from "./components/Meals/AvailableDrinks";
import CartProvider from "./store/CartProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableFries from "./components/Meals/AvailableFries";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    // <div>
    <CartProvider>
      <BrowserRouter>
        {showCart && <CartModal onClose={hideCartHandler} />}
        <Header onShow={showCartHandler} />
        <Routes>
          <Route path="/" element={<AvailableBurgers />} />
          <Route path="/availDrinks" element={<AvailableDrinks />} />
          <Route path="/availFries" element={<AvailableFries />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    // </div>
  );
}

export default App;
