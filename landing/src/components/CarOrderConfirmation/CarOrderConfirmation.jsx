import React from 'react';
import { Link } from 'react-router-dom';
import './CarOrderConfirmation.css';
import carImage from '../ImagesFol/verna.png'; // Import the car image
const CarOrderConfirmation = () => {
  const orderDetails = {
    carName: 'Verna',
    pickupDetails: 'Naxal, Kathmandu',
    dropoffDetails: 'Bhaktapur',
    totalAmount: 3500,
    pickupDateTime: 'May 10, 2024 at 10:00 AM',
    dropoffDateTime: 'May 12, 2024 at 12:00 PM'
  };
  return (
    <div>
      {/* Booking Navbar */}
      <div className="booking-navbar">
        <ul className="booking-nav-links">
          <li className="booking-navbar-links">
            <Link to="/1" className="availability-link">1 - Search</Link>
          </li>
          <li className="booking-navbar-links">
            <Link to="/2" className="availability-link">2 - Availability</Link>
          </li>
          <li className="booking-navbar-links">
            <Link to="/3" className="availability-link">3 - Book</Link>
          </li>
          <li className="booking-navbar-links">
            <Link to="/4" className="availability-link">4 - Confirm</Link>
          </li>
        </ul>
      </div>
      {/* Car Order Confirmation Content */}
      <div className="confirmation-container">
        <h1 className="confirmation-title">Car Order Confirmation</h1>
        <div className="order-details">
          <h2>Congratulations 🥳 Your booking has been confirmed.</h2>
          
          {/* Car image section */}
          <div className="car-image-container">
            <img src={carImage} alt="Car" className="car-image" />
          </div>
          <p>Car Name: {orderDetails.carName}</p>
          <p>Pickup Location: {orderDetails.pickupDetails}</p>
          <p>Pickup Date & Time: {orderDetails.pickupDateTime}</p>
          <p>Drop-off Location: {orderDetails.dropoffDetails}</p>
          <p>Drop-off Date & Time: {orderDetails.dropoffDateTime}</p>
        </div>
        <div>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarOrderConfirmation;

