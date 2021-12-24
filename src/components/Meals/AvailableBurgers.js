import React from "react";
import classes from "./CardPage.module.css";

import bigMac from "../../assets/burgers/bigMac.png";
import cheeseBurger from "../../assets/burgers/cheeseBurger.png";
import chickenBurger from "../../assets/burgers/chickenBurger.png";
import doubleCheese from "../../assets/burgers/doubleCheese.png";
import doubleChicken from "../../assets/burgers/doubleChicken.png";
import filetoFish from "../../assets/burgers/filetoFish.png";
import hamburger from "../../assets/burgers/hamburger.png";
import mcBacon from "../../assets/burgers/mcBacon.png";
import mcChicken from "../../assets/burgers/mcChicken.png";
import nuggets from "../../assets/burgers/nuggets.png";
import tastyBasket from "../../assets/burgers/tastyBasket.png";
import Card from "../../UI/Card";
import BurgersList from "./BurgersList";

const DUMMY_BURGERS = [
  {
    id: "bigmac",
    name: "Big Mac",
    image: bigMac,
    price: 3,
  },
  {
    id: "cheeseB",
    name: "Cheese Burger",
    image: cheeseBurger,
    price: 2,
  },
  {
    id: "chickenB",
    name: "Chicken Burger",
    image: chickenBurger,
    price: 1.2,
  },
  {
    id: "doubleCheese",
    name: "Doublecheese Burger",
    image: doubleCheese,
    price: 2,
  },
  {
    id: "doubleChicken",
    name: "Doublechicken Burger",
    image: doubleChicken,
    price: 2,
  },
  {
    id: "fileto",
    name: "Filet-O-Fish",
    image: filetoFish,
    price: 3,
  },
  {
    id: "hamburger",
    name: "Hamburger",
    image: hamburger,
    price: 2,
  },
  {
    id: "mcBacon",
    name: "Crispy McBacon",
    image: mcBacon,
    price: 3,
  },
  {
    id: "mcChicken",
    name: "McChicken",
    image: mcChicken,
    price: 3,
  },
  {
    id: "nuggets",
    name: "McNuggets",
    image: nuggets,
    price: 2.5,
  },
  {
    id: "tastyBasket",
    name: "Tasty Basket",
    image: tastyBasket,
    price: 5,
  },
];

const AvailableBurgers = () => {
  const burgerLists = DUMMY_BURGERS.map((burger) => (
    <BurgersList
      key={burger.id}
      id={burger.id}
      name={burger.name}
      image={burger.image}
      price={burger.price}
    />
  ));
  return <div className={classes.cardPage}>{burgerLists}</div>;
};

export default AvailableBurgers;
