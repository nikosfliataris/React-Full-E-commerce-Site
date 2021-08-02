import React, { useState, useEffect } from "react";
import "./Main.css";
import { Breadcrumb } from "react-bootstrap";
import Filterbar from "./Filterbar";

import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="products">
        <div className="breadcrumb-column">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Products</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="sidebar-container container">
          <Filterbar />
        </div>
      </div>
      <div className="link-list container">
        <Link to="/products/Android-mobile" className="link-item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71RxOftVoQL._AC_SL1500_.jpg"
            alt="Product Mobile"
          />
          <h3>Android Mobiles</h3>
        </Link>
        <Link to="/products/windows-mobile" className="link-item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81xceAfzBbL._AC_SL1500_.jpg"
            alt="Windows Mobiles"
          />
          <h3>Windows Mobiles</h3>
        </Link>
        <Link to="/products/smart-tvs" className="link-item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg"
            alt="Smart Tvs"
          />
          <h3>Smart Tvs</h3>
        </Link>
        <Link to="/products/gaming-consoles" className="link-item">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/616UCFmG%2BCL._SL1500_.jpg"
            alt="Gaming Consoles"
          />
          <h3>Gaming Consoles</h3>
        </Link>
        <Link to="/products/gaming-accesories" className="link-item">
          <img
            src="https://m.media-amazon.com/images/I/51v0T9+NgdL._SL1200_.jpg"
            alt="Gaming Accesories"
          />
          <h3>Gaming Accesories</h3>
        </Link>
        <Link to="/products/pcandlaptop" className="link-item">
          <img
            src="https://m.media-amazon.com/images/I/81skV7BufjL._AC_SL1500_.jpg"
            alt="Pc and Laptop"
          />
          <h3>Pc and Laptop</h3>
        </Link>
        <Link to="/products/pc-accesories" className="link-item">
          <img
            src="https://m.media-amazon.com/images/I/710SCsUMuGS._AC_SL1500_.jpg"
            alt="Pc and Laptop"
          />
          <h3>Pc and Laptop</h3>
        </Link>
      </div>
    </>
  );
}

export default Main;
