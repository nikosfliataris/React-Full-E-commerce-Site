import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { Breadcrumb } from "react-bootstrap";
import Filterbar from "../Main/Filterbar";
import WishlistItem from "./WishlistItem";
import { db } from "../../firebase";
import { useStateValue } from "../ComponentAPI/StateProvider";
function Wishlist() {
  const [listItems, setListItems] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user) {
      db.collection("Wishlist")
        .doc(user?.uid)
        .collection("wishlist")
        .onSnapshot((snapshot) =>
          setListItems(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setListItems([]);
    }
  }, [user]);
  return (
    <>
      <div className="products">
        <div className="breadcrumb-column">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>WishList</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="sidebar-container container">
          <Filterbar />
        </div>
        <div id="wishList-list-product">
          {listItems.map((items) => (
            <WishlistItem
              title={items.data.title}
              price={items.data.price}
              image={items.data.image}
              id={items.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
