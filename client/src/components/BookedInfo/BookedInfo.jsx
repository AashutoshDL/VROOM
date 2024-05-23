import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import axios from 'axios';
import './bookedinfo.css';



const stripePromise = loadStripe('pk_test_51PH5jXBtceYPOTuZlF0OS76U2SIOYk9tFt3rXYozriWLcYOF6XLa4iJhstcdTywZllIHBDrdJXP1veAutfuth4qe00TEi1A7rv');

const CarImage = ({ carData }) => (
  <div className="car-image-container">
    <img src={`http://localhost:3001/cars/${carData.image}`} alt={carData.model} />
  </div>
);

CarImage.propTypes = {
  carData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};

const CarDetails = ({ carData, bookingData }) => (
  <div className='bookedcar-details'>
    <h3>{carData.model}</h3>
    <p className="booking-detail">Company: {carData.company}</p>
    <p className="booking-detail">Year: {carData.year}</p>
    <p className="booking-detail">Pickup Details: {bookingData.input1}</p>
    <p className="booking-detail">Drop-off Details: {bookingData.input2}</p>
    <p className="booking-detail">Pickup Date: {bookingData.pickUpDate && bookingData.pickUpDate.toString()}</p>
    <p className="booking-detail">Drop-off Date: {bookingData.dropOffDate && bookingData.dropOffDate.toString()}</p>
    <p className="booking-detail">Price: {carData.price}</p>
  </div>
);

CarDetails.propTypes = {
  carData: PropTypes.shape({
    carId: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  bookingData: PropTypes.object.isRequired,
};

const NeedsAndDonts = ({ setClientNeeds, setClientDonts }) => (
  <div className='bookinginfoclients'>
    <div className="client-needs">
      <h3>Requirements:</h3>
      <input
        type="text"
        aria-label="Enter client needs"
        placeholder="Dos"
        onChange={(event) => setClientNeeds(event.target.value)}
      />
    </div>
    <div className="client-donts">
      <input
        type="text"
        aria-label="Enter client don'ts"
        placeholder="Donts"
        onChange={(event) => setClientDonts(event.target.value)}
      />
    </div>
  </div>
);

NeedsAndDonts.propTypes = {
  setClientNeeds: PropTypes.func.isRequired,
  setClientDonts: PropTypes.func.isRequired,
};

const CheckoutForm = ({ carId, carData, bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleBooking = async (paymentResponse) => {
    try {
      const bookingResponse = await axios.post('http://localhost:3001/api/createBooking', {
        paymentResponse,
        carData,
        bookingData,
      });
      console.log(bookingResponse);
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Booking creation failed');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.error('Error creating token:', error);
      return;
    }

    let paymentResponse;
    try {
      paymentResponse = await axios.post('http://localhost:3001/api/payment', {
        token: token.id,
        amount: carData.price * 100, // Amount in cents
        carId,
      });
      console.log(paymentResponse);

      alert('Payment successful!');
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment processing failed');
      return; // Return early if payment processing fails
    }

    await handleBooking(paymentResponse);
    navigate(`/paymentSuccess`);
  };

  return (
    <form onSubmit={handleSubmit} className='bookedformbtn'>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

CheckoutForm.propTypes = {
  carId: PropTypes.string.isRequired,
  carData: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
  bookingData: PropTypes.object.isRequired,
};

const BookingForm = ({ carId, carData, bookingData }) => (
  <Elements stripe={stripePromise}>
    <div className="booking-form">
      <CarImage carData={carData} />
      <CarDetails carData={carData} bookingData={bookingData} />
      <NeedsAndDonts />
      <CheckoutForm carId={carId} carData={carData} bookingData={bookingData} />
    </div>
  </Elements>
);

BookingForm.propTypes = {
  carId: PropTypes.string.isRequired,
  carData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  bookingData: PropTypes.object.isRequired,
};

const BookedInfo = () => {
  const location = useLocation();
  const { carData, bookingData } = location.state || {};

  if (!carData || !bookingData) return <div>No booking data available</div>;

  return (
    <div className="booked-info">
      <div className="book-navbar">
        <ul className="pagination">
          <li className={location.pathname === "/vehicles" ? "active" : ""}>1: Vehicles</li>
          <li className={location.pathname === "/book" ? "active" : ""}><Link to="/book">2: Booking Process</Link></li>
          <li className={location.pathname === "/bookingConfirm" ? "active" : ""}>3: Confirm Booking</li>
        </ul>
      </div>
      <div className="booking-container">
        <BookingForm carId={carData._id} carData={carData} bookingData={bookingData} />
      </div>
    </div>
  );
};

export default BookedInfo;
