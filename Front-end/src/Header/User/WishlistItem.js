import React, { useEffect, useState } from "react";
import "./WishlistItem.css";
import { auth, provider, db } from "../../firebase";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useStateValue } from "../ComponentAPI/StateProvider";
import { Button } from "react-bootstrap";
function WishlistItem({ id, title, image, price }) {
  const [listItems, setListItems] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  const deleteWish = (e) => {
    e.preventDefault();
    db.collection("Wishlist")
      .doc(user.uid)
      .collection("wishlist")
      .doc(id)
      .delete();
  };

  const AddtoCart = () => {
    dispatch({
      type: "Add_to_Cart",
      product: {
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: 1,
      },
    });
  };

  return (
    <>
      <div className="wish-product-container container">
        <Card className="product-card">
          <CardHeader title={title} key={id} />
          <CardMedia
            image={image}
            style={{ width: "150px", height: "140px" }}
          />
          <CardContent className="product-price">
            <p>Price: </p>
            <strong> {price} $</strong>
          </CardContent>
          <Button className="wishlist-icon-delete" onClick={deleteWish}>
            X
          </Button>{" "}
          <Button onClick={AddtoCart}>Add to Cart</Button>
        </Card>
      </div>
    </>
  );
}

export default WishlistItem;
