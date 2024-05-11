import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./UserProfileHistory.css" 
import { useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";

function UserProfile() {
   const navigate = useNavigate();
   const handleNavigation = (route) => {
    navigate(route);
   };
  const [bookings, setBookings] = useState([]);
  // fix the issue in which the booking history shows even tho the user is not booked
  useEffect(() => {
    axios.get('http://localhost:3001/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div className='userhistory-container'>
      {bookings.map(booking => (
        <div key={booking._id}>
          <h2>{booking.carData.model}</h2>
          <img src={`http://localhost:3001/uploads/${booking.carData.image}`} alt={booking.carData.model} />
          <p>Company: {booking.carData.company}</p>
          <p>Year: {booking.carData.year}</p>
          <p>Price: {booking.carData.price}</p>
          <p>Available: {booking.carData.available}</p>
          <p>Status: {booking.carData.status}</p>
          <p>Pickup Date: {new Date(booking.bookingData.pickUpDate).toLocaleString()}</p>
          <p>Drop-off Date: {new Date(booking.bookingData.dropOffDate).toLocaleString()}</p>
        </div>
      ))}
      <div className="user-dashboard1">
        <div className="user-nav1">
          <div className="user-profile1">
            <ul className="user-lists1">
               <li className="user-links1" onClick={() => handleNavigation("/UserProfile")}>
                <div className="profile-icon">
                  <IoPersonSharp size={19}/>
                </div>
                My Profile
              </li>
              <li className="user-links1" onClick={() => handleNavigation("/UserProfileHistory")}>
                <div className="car-icon">
                  <IoCarSportOutline size={20}/>
                </div>
                My Bookings
              </li>
            </ul>
          </div>
        </div>
        <div className="user-display1">
          <h4 className='userhistory-title'>Booking History</h4>
          <div className="booked-cars">
            <div className="carimage-container"></div>
            <div className="historyfeature-container"></div>
            <div className="bookedhistory-container"></div>
          </div>
          <div className="booked-cars1">
            <div className="carimage-container"></div>
            <div className="historyfeature-container"></div>
            <div className="bookedhistory-container"></div>
          </div>
          <div className="booked-cars2">
            <div className="carimage-container"></div>
            <div className="historyfeature-container"></div>
            <div className="bookedhistory-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
