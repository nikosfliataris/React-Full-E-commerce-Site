import React from "react";
import "./Filterbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
function Filterbar() {
  return (
    <>
      <div className="filter-container">
        <div className="main-container">
          <div className="main-filter-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0026/5741/9323/files/11.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="filter-bar">
          <div className="position-icons">
            <MenuIcon className="menuicon" />
            <AppsIcon className="appicon" />
          </div>
          <div className="filterby">
            <label>Sorted by:</label>
            <select name="Sorted By:">
              <option value="featured">Featured</option>
              <option value="best-selling">Best Selling</option>
              <option value="a-z">Alphabetical, A-Z</option>
              <option value="z-a">Alphabetical, Z-A</option>
              <option value="price low">Price, low to high</option>
              <option value="price high">Price, high to low</option>
              <option value="new to old">Date, new to old</option>
              <option value="old to new">Date, old to new</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filterbar;
