import React from 'react'
import './UserProfile.css';
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
const UserProfile = () => {
   const navigate = useNavigate();
   const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div className='user-container'>
      <div className="user-dashboard">
        <div className="user-nav">
          <div className="user-profile">
            <ul className="user-lists">
               <li className="user-links" onClick={() => handleNavigation("/UserProfile")}>
                <div className="profile-icon">
                  <IoPersonSharp size={19}/>
                </div>
                My Profile
              </li>
              <li className="user-links" onClick={() => handleNavigation("/UserProfileHistory")}>
                <div className="car-icon">
                  <IoCarSportOutline size={20}/>
                </div>
                My Bookings
              </li>
            </ul>
          </div>
        </div>
        <div className="user-display">
          <div className="user-profileHeader">
            <div className="user-avatar"></div>
            {/* user data is required to be pulled starting from her */}
            <div className="user-welcome">
              <div className="user-name">
                <span id='user-infoname'>User Name</span>
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
              <input type="text" className='display-texts' readOnly />
            </div>
            <div className="user-details2">
              <label htmlFor="user-Email" className='display-labels'>Email</label>
              <input type="text" className='display-texts' readOnly/>
            </div>
            <div className="user-details3"> 
              <label htmlFor="user-Phonenumber" className='display-labels'>Phone number</label>
              <input type="text" className='display-texts' readOnly/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile