
import React, { useState } from 'react';
import './hire.css'; // Import the CSS file
import carImage from '../ImagesFol/car.png'; // Import the image file
import driverImage1 from '../ImagesFol/driver1.jpg'; // Import driver image
import driverImage2 from '../ImagesFol/driver2.jpg'; // import driver image
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ppImage from '../ImagesFol/ppimage.jpg';

// Data for available drivers and their reviews
const availableDrivers = [
  { name: 'Ram Shrestha', review: 'Experienced driver and good service!', image: driverImage1 },
  { name: 'Shyam Limbu', review: 'Safe driver and punctual.', image: driverImage2 }
];

const Hire = () => {
  const [name, setName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleLicenseChange = (e) => setLicenseNumber(e.target.value);
  const handleContactChange = (e) => setContactNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if any of the fields are empty
    if (name === '' || licenseNumber === '' || contactNumber === '') {
      alert('Please fill in all required fields.'); // Display error message
    } else {
      // Display success message and optionally perform any additional actions (e.g., submit data to server)
      alert('Driver rental request submitted successfully!');

      // Clear form fields after successful submission
      setName('');
      setLicenseNumber('');
      setContactNumber('');
    }
  };

  const [driverName, setDriverName] = useState("Prabala Shrestha");
  const [review, setReview] = useState("Excellent driver, punctual and professional");

  const stars = Array(5).fill(<FontAwesomeIcon icon={faStar} />);

  return (
    <div className="container">
      <div className="header">
        <div className="header-2">
          <h1>Welcome to Vroom </h1>
          <h1>Drivers Rental Service</h1>
          <p>Select a driver for rental</p>
        </div>
        <div className="header-1">
          <img src={carImage} alt="Car" />
        </div>
      </div>
      <div className="hire-driver-form">
        <h2>Driver Rental Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Driver Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="license">License Number</label>
            <input type="text" id="license" value={licenseNumber} onChange={handleLicenseChange} />
          </div>
          <div>
            <label htmlFor="contact">Contact Number</label>
            <input type="text" id="contact" value={contactNumber} onChange={handleContactChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="available-drivers">
        <div className="available-driver-1">
          <h2>Available Drivers</h2>
        </div>
        <div className="available-driver-2">
          <ul>
            {availableDrivers.map(driver => (
              <li key={driver.name}>
                <div>
                  <img src={driver.image} alt={driver.name} />
                </div>
                <div className='name'> {driver.name}</div>
                <div className='review'> {driver.review}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="driver-review">
        <div className="driver-review1">
          <h2>Driver Review</h2>
        </div>
        <div className="driver-review2">
          <div className="sub-review1">
            <img src={ppImage} alt="pp Image" className="driver-image" />
            <p className="driver-name">{driverName}</p>
            <p className="stars">{stars}</p>
          </div>
          <div className="sub-review2">
            <p className="review">{review}</p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Hire;