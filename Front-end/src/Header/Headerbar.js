import React, { useState } from "react";
import { useStateValue } from "./ComponentAPI/StateProvider";
import "./Headerbar.css";
import { Link } from "react-router-dom";
import AccountList from "./Account/AccountList";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { auth } from "../firebase";
function HeaderBar() {
  const [click, setClick] = useState(false);
  const [dropdownList, setDropdownList] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [{ user }, dispatch] = useStateValue();
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

  const handleAuthendication = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(user);
  return (
    <div className="headerbar">
      <div className="headercontainer">
        <div className="headerbar-currency">
          <label>Currency:</label>
          <select name="Currency">
            <option value="$">$ USD</option>

            <option value="€">€ EUR</option>

            <option value="£">£ GBP</option>

            <option value="¥">¥ JPY</option>
          </select>
        </div>
        <div className="headerbar-newletter">
          <ul className="headerbar-list">
            <li className="support">
              <span>
                Ordered before 17:30, shipped today - Support:123456789
              </span>
            </li>
            <span className="line"> |</span>
            <li
              className="account"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <SettingsOutlinedIcon className="account-icon" />
              <Link
                to={!user && "/account"}
                onClick={closeMobileMenu}
                onClick={handleAuthendication}
              >
                {user ? "Sign Out" : "My Acount"}
              </Link>
              {dropdownList && <AccountList />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
