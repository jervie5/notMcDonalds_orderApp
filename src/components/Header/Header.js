import React from "react";
import HeaderCart from "../Cart/HeaderCart";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const logo = "https://lh3.googleusercontent.com/pw/AM-JKLXVoxxOZpnYzcOLNhGsYHm9EFKuq2FtyxE2XBsVjrGfwjYDkkIaLT_-mM_rmN_cC5SgPh-K-SLLcH_EkhjcL5HneNvX1vZjXPbNtXnuUhDMQSyBM4FzOmEy0CUpruQBWS7PJ9fMKJ_sm-RkPt-68tQ=w1178-h410-no?authuser=0";

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
