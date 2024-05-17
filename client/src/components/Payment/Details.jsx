import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Details.css';

const Details = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getBooking');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="details-container">
      <h2>Recent Bookings</h2>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <div key={index} className="booking-card">
            <h3>{booking.carData.model}</h3>
            <p><strong>Company:</strong> {booking.carData.company}</p>
            <p><strong>Year:</strong> {booking.carData.year}</p>
            <p><strong>Pickup Details:</strong> {booking.bookingData.input1}</p>
            <p><strong>Drop-off Details:</strong> {booking.bookingData.input2}</p>
            <p><strong>Pickup Date:</strong> {new Date(booking.bookingData.pickUpDate).toLocaleDateString()}</p>
            <p><strong>Drop-off Date:</strong> {new Date(booking.bookingData.dropOffDate).toLocaleDateString()}</p>
            <p><strong>Price:</strong> ${booking.carData.price}</p>
          </div>
        ))
      ) : (
        <p>No bookings available</p>
      )}
    </div>
  );
};

export default Details;
