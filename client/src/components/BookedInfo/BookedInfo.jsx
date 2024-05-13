import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './bookedinfo.css'; // Import the stylesheet

const CarImage = ({ carData }) => (
  <div className="car-image-container">
    <img src={`http://localhost:3001/uploads/${carData.image}`} alt={carData.model} />
  </div>
);

const CarDetails = ({ carData, bookingData }) => (
  <div>
    <h3>{carData.model}</h3>
    <p>Company: {carData.company}</p>
    <p>Year: {carData.year}</p>
    <p className="booking-detail">Pickup Details: {bookingData.input1}</p>
    <p className="booking-detail">Drop-off Details: {bookingData.input2}</p>
    <p className="booking-detail">Pickup Date: {bookingData.pickUpDate && bookingData.pickUpDate.toString()}</p>
    <p className="booking-detail">Drop-off Date: {bookingData.dropOffDate && bookingData.dropOffDate.toString()}</p>
    <p className="booking-detail">Price: {carData.price}</p>
  </div>
);

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
    eSewa
      </label>
      {/* Add other payment method options similarly */}
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
          aria-label="Enter client needs"
          placeholder="Enter client needs"
          onChange={handleNeedsChange}
        />
      </div>
      <div className="client-donts">
        <h3>Client Don'ts:</h3>
        <input
          type="text"
          aria-label="Enter client don'ts"
          placeholder="Enter client don'ts"
          onChange={handleDontsChange}
        />
      </div>
    </div>
  );
};

const BookingForm = ({ carId, carData, bookingData }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Selected Payment Method:', selectedPaymentMethod);

    try {
      const response = await axios.post('http://localhost:3001/api/createBooking', {
        carId: carId,
        selectedPaymentMethod: selectedPaymentMethod,
        clientNeeds: '', // Add client needs and don'ts from state here
        clientDonts: ''
      });
      console.log(response.data);
      alert('Booking submitted successfully!');
      navigate(`/CarOrderConfirmation/${carId}`);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div>
      {/* Booking Form Content */}
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <CarImage carData={carData} />
          <CarDetails carData={carData} bookingData={bookingData} />
          <NeedsAndDonts />
          <PaymentMethodSelection
            selectedMethod={selectedPaymentMethod}
            setSelectedMethod={setSelectedPaymentMethod}
          />
          <button type="submit">Next</button> {/* Use button type="submit" for form submission */}
        </form>
      </div>
    </div>
  );
};


const BookedInfo = () => {
  const location = useLocation();
  const { carData, bookingData } = location.state || {};

  if (!carData || !bookingData) {
    return <div>No booking data available</div>;
  }

  return (
    <div className="container">
      {/* Render the BookingForm component with carId, carData, and bookingData */}
      <BookingForm carId={carData.id} carData={carData} bookingData={bookingData} />
    </div>
  );
};

export default BookedInfo;
