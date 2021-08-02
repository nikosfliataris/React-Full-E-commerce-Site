import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { db } from "../../../firebase";
import Filterbar from "../Filterbar";
import "./Gaming-Accesories.css";
import GamingAproducts from "./info-pages/GamingAproducts";
import { useStateValue } from "../../ComponentAPI/StateProvider";
function GamingAProducts() {
  const [productsGA, setProductsGA] = useState([
    /* {
      id: "Samsung S21",
      image:
        "https://www.abox.gr/image/cache/catalog/20210115095109_samsung_galaxy_s21_ultra_5g_128gb_phantom_black-500x500.jpeg",
      title: "Samsung Galaxy S21 Ultra 5G (256GB) Phantom Black",
      price: "1026.86",
      description:
        "To Galaxy S21 Ultra διαθέτει οθόνη 6,8″ Dynamic AMOLED 2X και επεξεργαστή Exynos 2100 5G, σύστημα κάμερας 108MP με OIS/100x Space Zoom, συμβατότητα με S-Pen και μεγάλη αυτονομία.Η συσκευασία δεν περιλαμβάνει ακουστικά και φορτιστή, αλλά μόνο ένα καλώδιο USB Type-C 3A",
      characteristics:
        "ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ:Ισχύς Επεξεργαστή	2,9 GHz Πυρήνες Επεξεργαστή	1 + 3 + 4 Μνήμη RAM	12 GB Ενσωματωμένη Μνήμη	256 GB Card Slot	Όχι Μέγεθος Οθόνης	6,8 Ανάλυση Οθόνης	3200 x 1440 pixels Τύπος Οθόνης	Super AMOLED Κάμερα main	108MP + 12MP + 12MP Selfie Κάμερα	40MP Δίκτυο Σύνδεσης	5G Τύπος Διασύνδεσης	Bluetooth, NFC, USB-C, Wi-Fi Μέγεθος Μπαταρίας	5000 mAh Αισθητήρες	Accelerometer, Proximity, Βαρόμετρο, Γυροσκόπιο, Πυξίδα -- Dust Resistant , Water Resistant - IP68 Διαστάσεις	165.1 x 75.6 x 8.9 mm Βάρος	227 gr",
      rating: 5,
    }*/
  ]);

  const getProducts = () => {
    db.collection("Gaming-Accesories").onSnapshot((snapshot) => {
      setProductsGA(
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
    db.collection("Gaming-Accesories").doc(id).set({
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
            <Breadcrumb.Item active>Gaming Accesories</Breadcrumb.Item>{" "}
          </Breadcrumb>
        </div>
        <div className="sidebar-container container">
          <Filterbar />
        </div>
        <div id="gaminga-list-product ">
          {productsGA.map((product) => (
            <GamingAproducts
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

export default GamingAProducts;
