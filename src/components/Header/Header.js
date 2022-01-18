import React from "react";
import HeaderCart from "../Cart/HeaderCart";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/lanostrastoria.jpeg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Not McDonalds</h1>
        <HeaderCart onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={logo} alt="main logo" />
      </div>
      <div className={classes.links}>
        <Link to="/">Burgers</Link> | <Link to="/drinks">Drinks</Link> |{" "}
        <Link to="/fries">Fries</Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
