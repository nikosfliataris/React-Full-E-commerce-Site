import React, { useState, useEffect } from "react";
import "./MyAccount.css";
import { db } from "../../firebase";
import OrderList from "./OrderList";
import { useStateValue } from "../ComponentAPI/StateProvider";

function MyAccount() {
  const [orders, setOrders] = useState([]);
  const [{ user, basket }, dispatch] = useStateValue();
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="order-list">
        {orders?.map((order) => (
          <OrderList order={order} />
        ))}
      </div>
    </div>
  );
}

export default MyAccount;
