import React from "react";
import HeaderCart from "../Cart/HeaderCart";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const logo = "https://lh3.googleusercontent.com/tnJfXLLro3juDBlah3dJTSB8R744HtgbiU661K8VKwramsAEDY9R71K4KpcCpcfM2T3c-umopD_FrbR_DFaIivsQT0bCeYT9Kp1AAuyd3BexyIstrXD7tynkptJ8aFYzQm9HTtOloFWD69nv0s-pU43npOX9Y_smcSpqnL2bjceOVJcNkCDmBdhDGoBPPoAX19eQQrXW8fpZ9OchkO1dMqTc95oaqo-bgWoY9v8Y9Y18XK1LHILUzkugbFrsIrj_G9ELG-5dYNOShyprtKnqdwEZfLXTMhmBVcNH5K-kxxkzS4nlz4QkSKCQpVSrdbjqhdWO8bKPUl2AIIfXZMVtuXI0sBGZrIg6518Nd6AMSUayYn4UjBeGHgPsMKNhloVPVlY2SMnCxRMK0vwZM7mQ-a82MjqeRKS4_Uy-nijgA5JorY9G5vC1X3vcqSwpp1haeIuDKTqk-EItiLmoNLesUTiV2G_q_puyLdLvfgUV-d-dYLupf1lovZZ-qN0phifKcvjuqQQ5Mz_VhzOlefY-x5_Htkwn9RXTZ5npLkHkXBJjSGAJp5vgaXSoeM8U2KbVZwtjWOC-arHy3S6Ikc-LOPrOpADRZfTZBQHtq4Fnv0f0tGkBQJbuY27nr6zwzDLnsm6GNAa2x4Gy_tXxglhPomrqvI0stgJuYvJjRlBRFCv_z5lZ-7_c6gGEP2H7xxwTpYqHsHRLqXb_UvyB63V63fM=w651-h227-no?authuser=0";

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
