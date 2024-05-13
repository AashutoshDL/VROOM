import React, { useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios'
import './bookedinfo.css';

const BookedInfo = () => {
  const location = useLocation();


  const { carData, bookingData } = location.state || {};
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [dos, setDos] = useState('');
  const [donts, setDonts] = useState('');

  const navigate=useNavigate();
  const handleSubmit = () => {
    setShowConfirmation(true);
    axios.post('http://localhost:3001/api/createBooking', {
      carData: carData,
      bookingData: bookingData,
      dos: dos,
      donts: donts
    })  
    .then(response => {
      console.log(response.data);
      alert('Data sent to the database successfully!');
      navigate('/payment', {state: {carData: carData}});
    })
    .catch(error => {
      console.error('Error submitting booking:', error);
    });
  }

  if (!carData || !bookingData) {
    // Handle the case where carData or bookingData is not available
    return <div>No booking data available</div>;
  }

  const handleDosChange = (event) => {
    setDos(event.target.value);
  }
  
  const handleDontsChange = (event) => {
    setDonts(event.target.value);
  }

  console.log(bookingData)
  console.log(carData)
  return (
    <div className="container">
      <div className="left-side">
        <div className="image-container">
          <img src={`http://localhost:3001/uploads/${carData.image}`} alt={carData.model} />
        </div>
        <div>
          <h3>{carData.model}</h3>
          <p>Company: {carData.company}</p>
          <p>Year: {carData.year}</p>
        </div>
        <div>
          <p>Status: {carData.status}</p>
          <p>Available: {carData.available}</p>
          <p>Price: {carData.price}</p>
          <button className="btn btn-danger" onClick={handleSubmit}>Confirm</button>
        </div>
      </div>
      <div className="right-side">
        <div>
          <h3>Booking Information</h3>
          <p>Pick Up Location: {bookingData.input1}</p>
          <p>Drop Off Location: {bookingData.input2}</p>
          <p>Pick Up Date: {bookingData.pickUpDate && bookingData.pickUpDate.toString()}</p>
          <p>Drop Off Date: {bookingData.dropOffDate && bookingData.dropOffDate.toString()}</p>
        </div>
        <div className="text-fields">
          <h3>{`Do's`}</h3>
          <input type="text" className="form-control" value={dos} onChange={handleDosChange}/>
          <h3>{`Don'ts`}</h3>
          <input type="text" className="form-control" value={donts} onChange={handleDontsChange} />
        </div>
      </div>
    </div>
  );
};

export default BookedInfo;