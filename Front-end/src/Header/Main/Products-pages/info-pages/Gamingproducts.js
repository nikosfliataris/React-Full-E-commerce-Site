import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Gamingproducts.css";
import { auth, provider, db } from "../../../../firebase";
import { useStateValue } from "../../../ComponentAPI/StateProvider";
function Gamingproducts({ id, title, image, price, rating, description }) {
  const [{ user }, dispatch] = useStateValue();

  const DeleteProduct = (e) => {
    e.preventDefault();
    db.collection("Gaming-Consoles").doc(id).delete();
  };

  const wishList = (e) => {
    e.preventDefault();
    db.collection("Wishlist")
      .doc(user?.uid)
      .collection("wishlist")
      .doc(id)
      .set({
        title: title,
        image: image,
        price: price,
      });
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
      <div className="productm-container container">
        <Card className="product-card" key={id}>
          <CardHeader title={title} />
          <CardMedia
            image={image}
            style={{ width: "150px", height: "140px" }}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>

          <CardContent className="product-rating">
            <strong>
              {Array(rating)
                .fill()
                .map((rating) => (
                  <p>⭐</p>
                ))}
            </strong>
          </CardContent>
          <CardContent className="product-price">
            <p>Price: </p>
            <strong> {price} $</strong>
          </CardContent>

          <Button className="favorite-cart-button" onClick={wishList}>
            <FavoriteOutlinedIcon />
          </Button>
          {user == null || user.email !== "admin@yahoo.gr" ? (
            <Button
              type="submit"
              className="add-cart-button"
              onClick={AddtoCart}
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              type="submit"
              className="add-cart-button"
              onClick={DeleteProduct}
            >
              Delete Product
            </Button>
          )}
        </Card>
      </div>
    </>
  );
}

export default Gamingproducts;
