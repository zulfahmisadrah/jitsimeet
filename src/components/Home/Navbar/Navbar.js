import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={`${nav ? "nav active" : "nav"} navbar-home`}>
      <div class="container">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#home" style={{ textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" style={{ textDecoration: "none" }}>
              Features
            </a>
          </li>
          <li>
            <a href="#contacts" style={{ textDecoration: "none" }}>
              Contact
            </a>
          </li>
          <li>
            <Link to="/Signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
