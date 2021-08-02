import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import CopyrightRoundedIcon from "@material-ui/icons/CopyrightRounded";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-address">
            <h1 className="footer-name">Fliataris E-Shop</h1>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majorited have suffered alteration.
            </span>
            <span>
              <strong>Address: </strong>
              <small> Eratyra Kozani T.K.50003</small>
            </span>
            <span>
              <strong>Phone: </strong>
              <small> 6984721148</small>
            </span>
            <span>
              <strong>E-mail: </strong>
              <small> nicolaseratyra@yahoo.gr</small>
            </span>
          </div>
          <div className="footer-info">
            <span>
              <h4>INFORMATION</h4>
            </span>
            <ul className="footer-top-list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/pages/wishlist">Whishlist</Link>
              </li>
              <li>
                <Link to="/products">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="footer-account">
            <span>
              <h4>MY ACCOUNT</h4>
            </span>
            <ul className="footer-top-list">
              <li>
                <Link to="account">My Account</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/pages/shipping-policy">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/checkout">CheckOut</Link>
              </li>
              <li>
                <Link to="/">Faq</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-social">
              <span>
                <h4>FOLLOW US</h4>
              </span>
              <ul>
                <li>
                  <a href="https://facebook.com">
                    <FacebookIcon className="icons" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <TwitterIcon className="icons" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/">
                    <LinkedInIcon className="icons" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <InstagramIcon className="icons" />
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <PinterestIcon className="icons" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-download">
              <span>
                <h4>DOWNLOAD APP</h4>
              </span>
              <ul>
                <li>
                  <AppleIcon className="icons" />
                </li>
                <li>
                  <AndroidIcon className="icons" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-middle-container">
            <MailOutlineIcon className="middle-icon" />
            <div className="news-letter">
              <h2>Sign Up For Newsletters</h2>
              <h4>
                Get E-mail updates about our latest shop and special offers.
              </h4>
            </div>

            <form className="footer-middle-form">
              <input type="text" placeholder="Enter your e-mail" />
            </form>
            <button className="form-button">
              <SendRoundedIcon className="form-icon" />
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">
            <h2>
              Copyright <CopyrightRoundedIcon className="copyright" /> 2021
              <strong> HasThemes.</strong>
            </h2>
            <span className="footer-design">
              <h2>
                Builted by <strong>Fliataris Nikolaos. </strong>
              </h2>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
