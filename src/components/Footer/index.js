import React from "react";
import "./index.css";
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="#hero">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Demo</a>
          </li>
        </ul>
        <div className="bottom">
          <div className="line"></div>
          <p>{new Date().getFullYear} Execute, Inc. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
