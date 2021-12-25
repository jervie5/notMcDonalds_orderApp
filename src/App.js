import { useState, useEffect } from "react";
import CartModal from "./components/Cart/CartModal";
import Header from "./components/Header/Header";
import AvailableBurgers from "./components/Meals/AvailableBurgers";
import AvailableDrinks from "./components/Meals/AvailableDrinks";
import CartProvider from "./store/CartProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableFries from "./components/Meals/AvailableFries";




function App() {
  const [showCart, setShowCart] = useState(false);
  const [burgerMeals, setBurgerMeals] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [friesMeals, setFriesMeals] = useState([]);
  const [drinksMeals, setDrinksmeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://notmcdo-mini-app-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const burgerArr = [];
      const friesArr = [];
      const drinksArr = [];

      const superFn = (stringName, arrayToFill, setStateFn) => {
        for (const key in data) {
          if (key === stringName) {
            for (const item in data[key]) {
              arrayToFill.push({
                id: item,
                name: data[key][item].name,
                price: data[key][item].price,
                image: data[key][item].image,
              });
            }
          }
        }
        setStateFn(arrayToFill);
      };
      superFn("burgers", burgerArr, setBurgerMeals);
      superFn("fries", friesArr, setFriesMeals);
      superFn("drinks", drinksArr, setDrinksmeals);
      console.log("running");
    };

    fetchData().catch((error) => {
      setErrorMessage(error.message);
      console.log(errorMessage)
    });
    
}, []);

  
  

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
          {!errorMessage && <p>{errorMessage}</p>}

        <Routes>
          <Route path="/" element={<AvailableBurgers meals={burgerMeals}/>} />
          <Route path="/drinks" element={<AvailableDrinks drinks={drinksMeals} />} />
          <Route path="/fries" element={<AvailableFries fries={friesMeals}/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    // </div>
  );
}

export default App;
