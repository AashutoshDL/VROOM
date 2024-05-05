import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import bookingConfirm from '../Confirm/bookingConfirm';

const BookedInfo = () => {
  const location = useLocation();
  const { carData, bookingData } = location.state || {};
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    setShowConfirmation(true);
  }

  if (!carData || !bookingData) {
    // Handle the case where carData or bookingData is not available
    return <div>No booking data available</div>;
  }

  console.log(bookingData)
  console.log(carData)
  return (
    <div>
      <h2>Booked Car Details</h2>
      <div>
        <h3>Booking Information</h3>
        <p>Pick Up Location: {bookingData.input1}</p>
        <p>Drop Off Location: {bookingData.input2}</p>
        <p>Pick Up Date: {bookingData.pickUpDate && bookingData.pickUpDate.toString()}</p>
        <p>Drop Off Date: {bookingData.dropOffDate && bookingData.dropOffDate.toString()}</p>
      </div>
      <div>
        <img src={`http://localhost:3001/uploads/${carData.image}`} alt={carData.model} />
        <h3>{carData.model}</h3>
        <p>Company: {carData.company}</p>
        <p>Year: {carData.year}</p>
        <p>Status: {carData.status}</p>
        <p>Available: {carData.available}</p>
        <p>Price: {carData.price}</p>
      </div>
      <button className="btn btn-danger" onClick={handleSubmit}>Confirm</button>
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Your order has been confirmed!!</p>
          <button className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Exit</button>
        </div>
      )}
    </div>
  );
};

export default BookedInfo;
