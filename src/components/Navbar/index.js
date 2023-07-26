import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
import "./index.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="header" id="header">
      <nav className="navbar">
        <Link href="#" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger">
          {showMenu ? (
            <FaTimes onClick={handleShowMenu} style={{ color: "#fff" }} />
          ) : (
            <FaBars onClick={handleShowMenu} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              Demo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
