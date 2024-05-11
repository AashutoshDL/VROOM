import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [bookings, setBookings] = useState([]);
  // fix the issue in which the booking history shows even tho the user is not booked
  useEffect(() => {
    axios.get('http://localhost:3001/api/getBookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <h1>Booking History</h1>
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
    </div>
  );
}

export default UserProfile;
