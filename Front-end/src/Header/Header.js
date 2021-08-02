import React from "react";
import "./Header.css";
import Headerbar from "./Headerbar";
import HeaderNavbar from "./HeaderNavbar";
import Headersearch from "./Headersearch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCart from "./User/ShoppingCart";
import SignIn from "./User/SignIn";
import Wishlist from "./User/Wishlist";
import MyAccount from "./User/MyAccount";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Main from "./Main/Main";
import AndroidMobile from "./Main/Products-pages/AndroidMobile";
import WindowsMobile from "./Main/Products-pages/WindowsMobile";
import GamingConsoles from "./Main/Products-pages/Gaming-Consoles";
import SmartTv from "./Main/Products-pages/SmartTv";
import GamingAccesories from "./Main/Products-pages/Gaming-Accesories";
import PcandLaptop from "./Main/Products-pages/Pc-Laptop";
import PcAccesories from "./Main/Products-pages/Pc-Accesories";
import Payment from "../Header/User/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "{public stripe key}"
);
function Header() {
  return (
    <Router>
      <Headerbar />
      <Headersearch />
      <HeaderNavbar />
      <Switch>
        <Route path="/account" exact component={MyAccount} />
        <Route path="/account/login" exact component={SignIn} />
        <Route path="/cart/shoppingCart" exact component={ShoppingCart} />
        <Route path="/cart/wishlist" exact component={Wishlist} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contactus" exact component={Contact} />
        <Route path="/main" exact component={Main} />
        <Route
          path="/products/Android-mobile"
          exact
          component={AndroidMobile}
        />

        <Route
          path="/products/windows-mobile"
          exact
          component={WindowsMobile}
        />

        <Route path="/products/smart-tvs" exact component={SmartTv} />
        <Route
          path="/products/gaming-consoles"
          exact
          component={GamingConsoles}
        />

        <Route
          path="/products/gaming-accesories"
          exact
          component={GamingAccesories}
        />

        <Route path="/products/pcandlaptop" exact component={PcandLaptop} />

        <Route path="/products/pc-accesories" exact component={PcAccesories} />
        <Elements stripe={promise}>
          <Route path="/payment" exact component={Payment} />
        </Elements>
      </Switch>
    </Router>
  );
}

export default Header;
