import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../ImagesFol/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setUserName] = useState("");

  // Check if user is logged in on component mount
  useEffect(() => {
    // Check if user is logged in (e.g., token exists in local storage)
    const name = localStorage.getItem("name");

    if (name) {
      setIsLoggedIn(true);
      setUserName(name);
    } else {
      setIsLoggedIn(false);
      setUserName("")
    }
  }, [isLoggedIn]);

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      {/* Navigation bar */}
      <div className="navBar">
        {/* Bootstrap Navbar */}
        <Navbar expand="lg" id="mainnav">
          <div className="container">
            <div className="logoDiv">
              {/* Logo */}
              <img src={logo} alt="Logo Image" className="logo" />
            </div>
            {/* Navbar toggle button */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* Navigation links */}
                <ul className="navigation">
                  {/* Home link */}
                  <li
                    className="navbar-links"
                    onClick={() => handleNavigation("/")}
                  >
                    <span className="nav-content">Home</span>
                  </li>
                  {/* Hire link */}
                  <li
                    className="navbar-links"
                    onClick={() => handleNavigation("/hireDriver")}
                  >
                    <span className="nav-content">Hire</span>
                  </li>
                  {/* Contact Us link */}
                  <li className="navbar-links">
                    <div className="dropdown">
                      <span className="nav-content dropbtn">Contact Us</span>
                      <ul className="dropdown-content">
                        <li
                          className="nav-droplinks"
                          onClick={() => handleNavigation("/contactUs")}
                        >
                          <span className="nav-dropcontent">FAQs</span>
                        </li>
                        <li
                          className="nav-droplinks"
                          onClick={() => handleNavigation("/insurance")}
                        >
                          <span className="nav-dropcontent">
                            Insurance Coverage
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </Nav>
              {/* Conditional rendering based on user authentication */}
              {isLoggedIn ? (
                <Nav className="Log">
                  <Link to="/userProfile" className="username">
                    Welcome, {name}
                  </Link>                  
                </Nav>
              ) : (
                <>
                  <Nav className="Log">
                    {/* Login button */}
                    <button
                      id="login-button"
                      onClick={() => handleNavigation("/login")}
                    >
                      <h2 className="login">Login</h2>
                    </button>
                  </Nav>
                  <Nav className="Sign">
                    {/* Register button */}
                    <button
                      id="btn"
                      onClick={() => handleNavigation("/register")}
                    >
                      <h2 className="signup">Register</h2>
                    </button>
                  </Nav>
                </>
              )}
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
