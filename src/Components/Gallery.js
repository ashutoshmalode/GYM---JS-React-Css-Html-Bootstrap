import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./component.css";

function Gallery() {
  return (
    <div className="gallery-continer">
      <Carousel className="gallery">
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Heavy Equipment</h3>
            <p> "The real workout starts when you want to stop."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Big Space Treadmill Section</h3>
            <p>
              I'm making little changes in my life to take care of myself, like
              putting in a mile or two on my treadmill every day.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Challenging Partners for Workout</h3>
            <p>We built togather</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Yoga and Meditation</h3>
            <p>Yoga is a discipline that opens the door to inner freedom.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542766788-a2f588f447ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Open Space for Weight Machines</h3>
            <p>
              “Discipline is the bridge between your bodybuilding goals and
              bodybuilding success.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1661497506531-85f60b38642a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Hygiene </h3>
            <p>"Create healthy habits, not restrictions."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Saparate section for Master Training</h3>
            <p>
              "Be patient and tough; someday this pain will be useful to you."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gallery1">
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1661286749098-fd5d4678e320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Personal Trainer</h3>
            <p>
              “The best way to find out if you can trust somebody is to trust
              them.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
