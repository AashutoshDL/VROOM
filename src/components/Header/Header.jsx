// Header.js

// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../ImagesFol/logo.png"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="navBar">
        <Navbar expand="lg" id="mainnav">
          <div className="container">
            <div className="logoDiv">
              <img src={logo} alt="Logo Image" className="logo" />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul className="navigation">
                  <li className="navbar-links" onClick={() => handleNavigation('/')}>
                    <span className="nav-content">Home</span>
                  </li>
                  {/* <li className="navbar-links" onClick={() => handleNavigation('/about')}>
                    <span>About</span>
                  </li> */}
                  <li className="navbar-links" onClick={() => handleNavigation('/vehicles')}>
                    <span className="nav-content">Vehicles</span>
                  </li>
                  <li className="navbar-links" onClick={() => handleNavigation('/hire')}>
                    <span className="nav-content">Hire</span>
                  </li>
                  <li className="navbar-links">
                    <span className="nav-content">Contact Us</span>
                  </li>
                </ul>
              </Nav>
              <Nav className="Sign">
                <button id="btn" onClick={() => handleNavigation('/register')}>
                  <h2 className="register">Register</h2>
                </button>
              </Nav>
              <Nav className="Log">
                <button id="login-button" onClick={() => handleNavigation('/login')}>
                  <h4 className="login">Login</h4>
                </button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
