import React from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import "./Contact.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
function Contact() {
  return (
    <div className="contact">
      <div className="breadcrumb-column">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>

          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container">
        <div className="contact-place">
          <div className="contact-form ">
            <h4>TELL US YOUR PROJECT</h4>
            <form className="form">
              <input
                type="text"
                placeholder="Your Name"
                className="form-name"
              />
              <input
                type="text"
                placeholder="Your E-mail"
                className="form-email"
              />
              <div className="message">
                <input
                  type="text"
                  placeholder="Your Message"
                  className="form-message"
                />
              </div>
            </form>
            <Button type="submit" className="form-btn">
              Send Email
            </Button>
          </div>
          <div className="contact-info">
            <h4>CONTACT US</h4>
            <p className="contact-paragraph">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <p>
              <HomeIcon />
              <small>Address : No 40 Baria Sreet 133/2 NewYork City</small>
            </p>
            <p>
              <PhoneIcon />
              <small>Tel: 123 456 789</small>
            </p>
            <p>
              <EmailOutlinedIcon />
              <small> Email : Infor@demo.com</small>
            </p>
            <strong>Working hours Monday – Saturday: 08AM – 22PM</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
