import React, { useState } from 'react';
import './UserProfile.css';
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("name"));
  const name = localStorage.getItem("name");
  const phoneNumber = localStorage.getItem("phoneNumber");

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("phoneNumber");
    setIsLoggedIn(false);
  };

  return (
    <div className='user-container'>
      <div className="user-dashboard">
        <div className="user-nav">
          <div className="user-profile">
            <ul className="user-lists">
              <li className="user-links" onClick={() => navigate("/userProfile")}>
                <div className="profile-icon">
                  <IoPersonSharp size={19}/>
                </div>
                My Profile
              </li>
              {isLoggedIn && (
                <li className="user-links" onClick={() => navigate("/userHistory")}>
                  <div className="car-icon">
                    <IoCarSportOutline size={20}/>
                  </div>
                  My Bookings
                </li>
              )}
              {isLoggedIn && (
                <li className="user-links" onClick={handleLogout}>
                  Logout
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="user-display">
          {isLoggedIn ? (
            <>
              <div className="user-profileHeader">
                <div className="user-avatar"></div>
                <div className="user-welcome">
                  <div className="user-name">
                    <span id='user-infoname'>{name}</span>
                  </div>
                  <div className="user-status">
                    <span id='user-infostatus'>Status</span>
                  </div>
                  <h7 className="welcome-message">Welcome to the User Dashboard</h7>
                </div>
              </div>
              <div className="base-line"></div>
              <div className="user-profileContainer">
                <div className="detail-title">
                  <h7 className="user-subtitle">My Details</h7>
                </div>
                <div className="user-details1">
                  <label htmlFor="user-name" className='display-labels'>Full Name</label>
                  <input type="text" className='display-texts' value={name} readOnly />
                </div>
                <div className="user-details3">
                  <label htmlFor="user-Phonenumber" className='display-labels'>Phone number</label>
                  <input type="text" className='display-texts' value={phoneNumber} readOnly/>
                </div>
              </div>
            </>
          ) : (
            <div>Please login to view your profile</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
