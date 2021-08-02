import React, { useState } from "react";
import "./HeaderNavbar.css";
import NavbarItems from "./NavbarList/NavbarItems";
import { Link } from "react-router-dom";
function HeaderNavbar() {
  const [click, setClick] = useState(false);
  const [dropdownList, setDropdownList] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdownList(false);
    } else {
      setDropdownList(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdownList(false);
    } else {
      setDropdownList(false);
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar-row">
        <ul className="navbar-items ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/main">Products</Link>
            {dropdownList && <NavbarItems />}
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderNavbar;
