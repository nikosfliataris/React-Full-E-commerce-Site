import React from "react";
import "./About.css";
import { Breadcrumb, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="about">
        <div className="breadcrumb-column">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="work-info">
          <div className="work-image">
            <img
              src="https://blog.mydock365.com/hubfs/william-iven-GANqCr1BRTU-unsplash.jpg"
              alt="work image"
            />
          </div>
          <div className="work-paragraph">
            <h2 className="work">I build custom web sites</h2>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend
              option congue nihil imperdiet doming id quod mazim placerat facer
              possim assum. Typi non habent claritatem insitam, est usus
              legentis in iis qui facit eorum claritatem.
            </p>
            <Button>
              <Link to="/products">View Work</Link>
            </Button>
          </div>
        </div>
        <div className="personal">
          <div className="customers">
            <strong>1234</strong>
            <small>Happry Customers</small>
          </div>
          <div className="awards">
            <strong>2345</strong>
            <small>Awards Winned</small>
          </div>
          <div className="time-work">
            <strong>More than 500</strong>
            <small>Hours of personal work</small>
          </div>
          <div className="projects">
            <strong>4</strong>
            <small>Complete Projects</small>
          </div>
        </div>
        <div className="experience">
          <div className="skills">
            <h3>I SUPPOSE HAVE THE SKILLS TO SHOW</h3>
            <div className="progressbar">
              <div className="column">
                <div>
                  <Button>70%</Button>
                  <div>Html/css/Javascript</div>
                </div>
                <div>
                  <Button>60%</Button>
                  <div>React</div>
                </div>
                <div>
                  <Button>50%</Button>
                  <div>Back End</div>
                </div>
              </div>
            </div>
          </div>
          <div className="experience-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0026/5741/9323/files/2_f450d5fa-d0ed-4f0c-b7d1-694096e8c4ca.jpg"
              alt="experience-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
