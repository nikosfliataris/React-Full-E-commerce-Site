import React from "react";
import "./ShoppingCartItem.css";
import { Button } from "react-bootstrap";
import { useStateValue } from "../ComponentAPI/StateProvider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function ShoppingCartItem({ id, image, price, title, quantity, hideButton }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "remove_from_cart",
      id: id,
    });
  };
  const decrease = () => {
    dispatch({
      type: "decrease_quantity",
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: quantity,
      },
    });
  };
  const increase = () => {
    dispatch({
      type: "increase_quantity",
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: quantity,
      },
    });
  };
  return (
    <>
      <div className="cartproduct container">
        <img src={image} alt={title} className="cartproduct-image" />
        <div className="cartproduct-info">
          <p className="cartproduct-name">{title}</p>
          <p className="cartproduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="cart-manage">
            <Button onClick={decrease} className="item-decrease">
              <ChevronLeftIcon className="cart-icon" />
            </Button>
            <input className="cart-quantity" value={quantity} />
            <Button onClick={increase} className="item-increase">
              <ChevronRightIcon className="cart-icon" />
            </Button>
            {!hideButton && <Button onClick={removeFromBasket}>Remove </Button>}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartItem;
