import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountList.css";
import { List } from "./List";

function AccountList() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div>
        <ul
          onClick={handleClick}
          className={click ? "dropdown-list clicked" : "dropdown-list"}
        >
          {List.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default AccountList;
