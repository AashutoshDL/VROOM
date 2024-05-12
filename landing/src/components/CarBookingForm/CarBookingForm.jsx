import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarBookingForm.css';

import carImage from '../ImagesFol/verna.png';
import esewaLogo from '../ImagesFol/esewa.png';
import fonepayLogo from '../ImagesFol/Fonepay.jpg';

const CarImage = () => {
  return (
    <div className="car-image-container">
      <img src={carImage} alt="Car" className="car-image" />
    </div>
  );
};

const CarDetails = () => {
  return (
    <div>
      <p className="booking-detail">Car Name: Verna</p>
      <p className="booking-detail">Pickup Details: Naxal, Kathmandu</p>
      <p className="booking-detail">Drop-off Details: Bhaktapur</p>
      <p className="booking-total-amount">Total Amount: RS. 3500 /-</p>
    </div>
  );
};

const PaymentMethodSelection = ({ selectedMethod, setSelectedMethod }) => {
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div>
      <h3 className="payment-title">Payment Method:</h3>
      <label>
        <input
          type="radio"
          value="eSewa"
          checked={selectedMethod === 'eSewa'}
          onChange={handleMethodChange}
        />
        <img src={esewaLogo} alt="eSewa" className="payment-logo" /> eSewa
      </label>
      <label>
        <input
          type="radio"
          value="FonePay"
          checked={selectedMethod === 'FonePay'}
          onChange={handleMethodChange}
        />
        <img src={fonepayLogo} alt="FonePay" className="payment-logo" /> FonePay
      </label>
    </div>
  );
};

const NeedsAndDonts = ({ setClientNeeds, setClientDonts }) => {
  const handleNeedsChange = (event) => {
    setClientNeeds(event.target.value);
  };

  const handleDontsChange = (event) => {
    setClientDonts(event.target.value);
  };

  return (
    <div>
      <div className="client-needs">
        <h3>Client Needs:</h3>
        <input
          type="text"
          id="client-needs"
          aria-label="Enter client needs"
          placeholder="Enter client needs"
          onChange={handleNeedsChange}
        />
      </div>
      <div className="client-donts">
        <h3>Client Don'ts:</h3>
        <input
          type="text"
          id="client-donts"
          aria-label="Enter client don'ts"
          placeholder="Enter client don'ts"
          onChange={handleDontsChange}
        />
      </div>
    </div>
  );
};

const BookingForm = ({ carId }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [clientNeeds, setClientNeeds] = useState('');
  const [clientDonts, setClientDonts] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Log form data for debugging
    console.log('Form submitted!');
    console.log('Selected Payment Method:', selectedPaymentMethod);
    console.log('Client Needs:', clientNeeds);
    console.log('Client Don\'ts:', clientDonts);

    // Perform additional logic such as API calls, form validation, etc.
    // Redirect to confirmation page using React Router
    // Example: history.push(`/CarOrderConfirmation/${carId}`);
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

      {/* Booking Form Content */}
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <CarImage />
          <CarDetails />
          <NeedsAndDonts setClientNeeds={setClientNeeds} setClientDonts={setClientDonts} />
          <PaymentMethodSelection
            selectedMethod={selectedPaymentMethod}
            setSelectedMethod={setSelectedPaymentMethod}
          />
          <Link to={`/CarOrderConfirmation/${carId}`} className="submit">
            <button type="button">Next</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
