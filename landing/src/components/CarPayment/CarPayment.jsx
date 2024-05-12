import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarPayment.css';

const CarImage = ({ imageUrl }) => {
  return (
    <div className="car-image-container">
      <img src={imageUrl} alt="Car" className="car-image" />
    </div>
  );
};

const CarDetails = ({ carName, pickupDetails, dropOffDetails, totalAmount }) => {
  return (
    <div>
      <p className="booking-detail1">Car Name: {carName}</p>
      <p className="booking-detail">Pickup Details: {pickupDetails}</p>
      <p className="booking-detail">Drop-off Details: {dropOffDetails}</p>
      <p className="booking-total-amount">Total Amount: {totalAmount}</p>
    </div>
  );
};

const PaymentForm = ({ selectedMethod }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Payment submitted!');
    console.log('Selected Payment Method:', selectedMethod);
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    // Additional logic for payment processing
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="payment-method">
        <h3 className="payment-title">Payment Method: {selectedMethod}</h3>
      </div>
      <div className="payment-details">
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Pay Now</button>
    </form>
  );
};

const CarPayment = ({ carId, selectedMethod }) => {
  const carName = 'Verna';
  const pickupDetails = 'Naxal, Kathmandu';
  const dropOffDetails = 'Bhaktapur';
  const totalAmount = 'RS. 3500 /-';

  return (
    <div>
      {/* Car Details */}
      <CarImage imageUrl={carImage} />
      <CarDetails
        carName={carName}
        pickupDetails={pickupDetails}
        dropOffDetails={dropOffDetails}
        totalAmount={totalAmount}
      />

      {/* Payment Form */}
      <PaymentForm selectedMethod={selectedMethod} />
      
      {/* Navigation */}
      <div className="navigation-buttons">
        <Link to={`/CarBookingForm/${carId}`} className="back-link">
          Back
        </Link>
      </div>
    </div>
  );
};

export default CarPayment;
