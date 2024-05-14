import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../ImagesFol/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setUserName] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track navbar toggled state

  // Check if user is logged in on component mount
  useEffect(() => {
    // Check if user is logged in (e.g., token exists in local storage)
    const name = localStorage.getItem("name");

    if (name) {
      setIsLoggedIn(true);
      setUserName(name);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);

  // Close the navbar when navigating to a new page
  useEffect(() => {
    setIsNavOpen(false);
  }, [location]); // Trigger this effect whenever the location changes

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
            <Navbar.Toggle
              id="smallnavbar"
              aria-controls="navbarSupportedContent"
              onClick={() => setIsNavOpen(!isNavOpen)} // Toggle the state when clicking the toggle button
            />
            <Navbar.Collapse id="navbarSupportedContent">
              {/* Navigation links */}
              <div className={`nav-links ${isNavOpen ? 'open' : ''}`}> {/* Apply CSS class based on isNavOpen state */}
                <ul className="navigation navbar-nav me-auto mb-2 mb-lg-0">
                  {/* Home link */}
                  <li
                    className="navbar-links"
                    onClick={() => handleNavigation("/")}
                  >
                    <span className="nav-content nav1" aria-current="page">Home</span>
                  </li>
                  {/* Other links */}
                  <li
                    className="navbar-links"
                    onClick={() => handleNavigation("/hireDriver")}
                  >
                    <span className="nav-content nav2">Hire</span>
                  </li>
                  <li className="navbar-links">
                    <div className="dropdown">
                      <span className="nav-content dropbtn nav3">Contact</span>
                      <ul className="dropdown-content">
                        <li
                          className="nav-droplinks"
                          onClick={() => handleNavigation("/contactUs")}
                        >
                          <span className="nav-dropcontent">FAQs</span>
                        </li>
                        <li
                          className="nav-droplinks drop-content1"
                          onClick={() => handleNavigation("/insurance")}
                        >
                          <span className="nav-dropcontent dropcontent1">
                            Insurance Coverage
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
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
