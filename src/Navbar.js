import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="link-item" onClick={""}>
            TVRF
          </Link>
          <i class="fab fa-typo3" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="link-item" onClick={""}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="link-item" onClick={""}>
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="link-item" onClick={""}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="link-item" onClick={""}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
