import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import React from "react";
import moment from "moment";
import "./OrderList.css";
import ShoppingCartItem from "./ShoppingCartItem";
import { db } from "../../firebase";
import CurrencyFormat from "react-currency-format";
function OrderList({ order }) {
  return (
    <>
      <div className="order">
        <h3>Order</h3>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order-id">
          <small>{order.id}</small>
        </p>
        {order.data.basket?.map((item) => (
          <ShoppingCartItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order-total">Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </>
  );
}

export default OrderList;
