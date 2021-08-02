import React, { useState } from "react";
import { ProductList } from "./NavbarList";
import { Link } from "react-router-dom";
import "./NavbarItems.css";
function NavbarItems() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <ul
          onClick={handleClick}
          className={click ? "dropdownp-list clicked" : "dropdownp-list"}
        >
          {ProductList.map((list, index) => {
            return (
              <li key={index}>
                <Link
                  className={list.cName}
                  to={list.path}
                  onClick={() => setClick(false)}
                >
                  {list.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavbarItems;
