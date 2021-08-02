import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { db } from "../../../firebase";
import Filterbar from "../Filterbar";
import "./WindowsMobile.css";
import Windowsproducts from "./info-pages/Windowsproducts";
import { useStateValue } from "../../ComponentAPI/StateProvider";
function WindowsMobile() {
  const [productsWM, setProductsWM] = useState([]);

  const getProducts = () => {
    db.collection("Windows-Mobiles").onSnapshot((snapshot) => {
      setProductsWM(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }))
      );
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  const [{ user }, dispatch] = useStateValue();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [description, setDesc] = useState("");

  const handleID = (event) => {
    setId(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };
  const handleCharacteristics = (event) => {
    setCharacteristics(event.target.value);
  };
  const handleDescription = (event) => {
    setDesc(event.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    db.collection("Windows-Mobiles").doc(id).set({
      title: title,
      image: image,
      price: price,
      description: description,
      characteristics: characteristics,
    });
    setId("");
    setTitle("");
    setImage("");
    setPrice("");
    setDesc("");
    setCharacteristics("");
  };

  return (
    <>
      <div className="products">
        <div className="breadcrumb-column">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>

            <Breadcrumb.Item href="/main">Products</Breadcrumb.Item>
            <Breadcrumb.Item active>Windows Mobile</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="sidebar-container container">
          <Filterbar />
        </div>
        <div id="windows-list-product">
          {productsWM.map((product) => (
            <Windowsproducts
              title={product.product.title}
              price={product.product.price}
              rating={product.product.rating}
              image={product.product.image}
              id={product.id}
            />
          ))}
        </div>
        {user == null || user.email !== "admin@yahoo.gr" ? (
          ""
        ) : (
          <Form>
            <input
              type="text"
              value={id}
              placeholder="Product ID"
              onChange={handleID}
            />
            <input
              type="text"
              value={title}
              placeholder="Product Name"
              onChange={handleTitle}
            />
            <input
              type={"file" || "text"}
              value={image}
              placeholder="Product Image"
              onChange={handleImage}
            />
            <input
              type="number"
              value={price}
              placeholder="Product Price"
              onChange={handlePrice}
            />
            <input
              type="text"
              value={description}
              placeholder="Product Description"
              onChange={handleDescription}
            />
            <input
              type="text"
              value={characteristics}
              placeholder="Product Characteristics"
              onChange={handleCharacteristics}
            />
            <Button
              disabled={
                (!id, !title, !price, !image, !description, !characteristics)
              }
              type="submit"
              onClick={handleAdd}
            >
              Add Product
            </Button>
          </Form>
        )}
      </div>
    </>
  );
}

export default WindowsMobile;
