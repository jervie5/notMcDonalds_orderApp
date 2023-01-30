import classes from "./CardPage.module.css";
import BurgersList from "./BurgersList";
import { useSelector } from "react-redux";

const AvailableBurgers = () => {
  const allBurgers = useSelector((state) => state.meal.burgers);

  const burgerList = allBurgers.map((burger) => (
    <BurgersList
      key={burger.id}
      id={burger.id}
      name={burger.name}
      image={burger.image}
      price={burger.price}
    />
  ));
  return <div className={classes.cardPage}>{burgerList}</div>;
};

export default AvailableBurgers;
