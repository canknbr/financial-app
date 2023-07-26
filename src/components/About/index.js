import React from "react";
import "./index.css";
import john from "../images//john-doe.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="person" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis esse, quaerat sint natus alias soluta et recusandae
            aut, libero, cupiditate optio totam saepe sequi consectetur facilis
            odio voluptates tempora ea!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            consectetur fuga quibusdam ad magni quia illum tenetur optio iure?
            Modi?
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
