import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="first-container">
          <Carousel>
            <Carousel.Item>
              <img
                src="//cdn.shopify.com/s/files/1/0026/5741/9323/files/1_c2b37b7c-ec46-4cb8-861d-d9dbc1f3106f.jpg?v=1525511569"
                alt="first-image"
                className="first-image"
              />
              <Button></Button>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="//cdn.shopify.com/s/files/1/0026/5741/9323/files/2_4c66979e-157d-41be-888e-3e352cd76e2f.jpg?v=1525511585"
                alt="secong-image"
                className="secong-image"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="second-container">
          <figure>
            <img
              className="xbox"
              src="https://cdn.shopify.com/s/files/1/0026/5741/9323/files/9_0bdcfe21-4389-4016-a547-68d92cf51fc8_large.jpg?v=1525511525"
              alt="xbox controller"
            />
          </figure>
          <figure>
            <img
              className="black-friday"
              src="https://cdn.shopify.com/s/files/1/0026/5741/9323/files/10_e14e0b01-8303-473e-941f-b9271815f1dd_large.jpg?v=1525511536"
              alt="black friday"
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Home;
