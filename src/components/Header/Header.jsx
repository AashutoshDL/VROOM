import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../ImagesFol/2.png"; 
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
                    <span>Home</span>
                  </li>
                  <li className="navbar-links" onClick={() => handleNavigation('/vehicles')}>
                    <span>Vehicles</span>
                  </li>
                  <li className="navbar-links" onClick={() => handleNavigation('/hire')}>
                    <span>Hire</span>
                  </li>
                  <li className="navbar-links">
                    <span>Contact Us</span>
                  </li>
                </ul>
              </Nav>
              <Nav className="Sign">
                <button id="btn">
                  <h2 className="signup">Register</h2>
                </button>
              </Nav>
              <Nav className="Log">
                <button id="login-button">
                  <h2 className="login">Login</h2>
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
