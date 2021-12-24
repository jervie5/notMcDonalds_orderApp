import coca from "../../assets/drinks/coca.png";
import tea_lemon from "../../assets/drinks/tea-lemon.png";
import apple_juice from "../../assets/drinks/apple-juice.png";
import coca_zero from "../../assets/drinks/coca-zero.png";
import fanta from "../../assets/drinks/fanta.png";
import sprite from "../../assets/drinks/sprite.png";
import tea_peach from "../../assets/drinks/tea-peach.png";
import tropicana from "../../assets/drinks/tropicana.png";
import water from "../../assets/drinks/water.png";
import React from "react";
import classes from './CardPage.module.css'
import DrinksList from "./DrinksList";




const DUMMY_DRINKS = [
  { id: "coke", name: "Coke", price: 1.4, img: coca },
  { id: "lemonTea", name: "Lemon tea", price: 1.5, img: tea_lemon },
  { id: "appleJuice", name: "Apple Juice", price: 1, img: apple_juice },
  { id: "cocaZero", name: "Coke zero", price: 1.4, img: coca_zero },
  { id: "fanta", name: "Fanta", price: 1.3, img: fanta },
  { id: "sprite", name: "Sprite", price: 1.3, img: sprite },
  { id: 'teaPeach', name: 'Peach tea', price: 1.3, img: tea_peach },
  { id: 'tropicana', name: 'Tropicana', price: 1.6, img: tropicana },
  { id: 'water', name: 'Bottle of water', price: 1, img: water}
];


const AvailableDrinks = () => {

  const mealList = DUMMY_DRINKS.map((meal) => (
    <DrinksList key={meal.id} 
    id={meal.id}
    name={meal.name}
    image={meal.img}
    price={meal.price.toFixed(2)}
    />
  ));
  

return (
  <section className={classes.cardPage}>
    {mealList}
  </section>
)
};

export default AvailableDrinks;
