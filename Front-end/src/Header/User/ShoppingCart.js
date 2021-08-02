import React from "react";
import "./ShoppingCart.css";
import { Breadcrumb } from "react-bootstrap";
import { useStateValue } from "../ComponentAPI/StateProvider";
import ShoppingCartItem from "./ShoppingCartItem";
import Subtotal from "./Subtotal";

function ShoppingCart() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <div className="breadcrumb-column">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>

          <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="cart-area container">
        <div className="cart-list container">
          {basket.map((product) => (
            <ShoppingCartItem
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
        <div className="subtotal-container">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
