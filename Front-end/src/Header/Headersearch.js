import React from "react";
import "./Headersearch.css";
import { useStateValue } from "./ComponentAPI/StateProvider";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Count, getBasketTotal } from "./ComponentAPI/reducer";
import CurrencyFormat from "react-currency-format";
function Headersearch() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="header-search">
      <div className="header-logo">
        <h1 className="header-name">Fliataris E-Shop</h1>
      </div>
      <div className="header-search-input">
        <input type="text" placeholder="Search our Store" />
        <button className="header-search-input-button">
          <SearchOutlinedIcon className="header-search-input-icon" />
        </button>
      </div>
      <div className="header-cart">
        <Link to="/cart/wishlist">
          <button className="header-cart-button">
            <FavoriteOutlinedIcon className="header-cart-favorite" />
          </button>
        </Link>
        <Link to="/cart/shoppingCart">
          <button className="header-cart-button">
            <ShoppingCartOutlinedIcon className="header-cart-cart" />
          </button>
        </Link>
        <button className="cart-number">{Count(basket)}</button>

        <CurrencyFormat
          renderText={(value) => (
            <React.Fragment>
              <strong className="cart-price">{value}</strong>
            </React.Fragment>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Headersearch;
