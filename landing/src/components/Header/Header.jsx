import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../ImagesFol/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Function to handle logout
  const handleLogout = () => {
    // Clear user authentication state and user's name from local storage
    localStorage.removeItem('name');
    // Update isLoggedIn state
    setIsLoggedIn(false);
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    // Check if user is logged in (e.g., token exists in local storage)
    const name = localStorage.getItem('name');
    if (name) {
      setIsLoggedIn(true);
      setUserName(name);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className='navBar'>
        <Navbar expand='lg' id='mainnav'>
          <div className='container'>
            <div className='logoDiv'>
              <img src={logo} alt='Logo Image' className='logo' />
            </div>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <ul className='navigation'>
                  <li className='navbar-links' onClick={() => handleNavigation('/')}>
                    <span>Home</span>
                  </li>
                  <li className='navbar-links' onClick={() => handleNavigation('/vehicles')}>
                    <span>Vehicles</span>
                  </li>
                  <li className='navbar-links' onClick={() => handleNavigation('/hire')}>
                    <span>Hire</span>
                  </li>
                  <li className='navbar-links'>
                    <span>Contact Us</span>
                  </li>
                </ul>
              </Nav>
              {isLoggedIn ? (
                <Nav className='Log'>
                  <span className='username'>Welcome, {userName}</span>
                  <button id='logout-button' onClick={handleLogout}>
                    <h2 className='logout'>Logout</h2>
                  </button>
                </Nav>
              ) : (
                <>
                  <Nav className='Sign'>
                    <button id='btn' onClick={() => handleNavigation('/register')}>
                      <h2 className='signup'>Register</h2>
                    </button>
                  </Nav>
                  <Nav className='Log'>
                    <button id='login-button' onClick={() => handleNavigation('/login')}>
                      <h2 className='login'>Login</h2>
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
