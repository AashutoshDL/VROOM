import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentSuccess.css'; // Create a CSS file for styling if needed

const PaymentSuccess =  () => {
  return (
    <div className="payment-success-container">
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your transaction was successful.</p>
      <Link to="/" className="back-to-home">Go to Home</Link>
      <br />
      <Link to="/details" className="back-to-home">Details</Link>
    </div>
  );
};

export default PaymentSuccess;
