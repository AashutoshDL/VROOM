import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Vehicles/Vehicles.css';

const Vehicles = () => {
  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState('1');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get('http://localhost:3001/api/getAllCars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  const handleSubmit = (car) => {
    const { bookingData } = location.state || {};
    navigate('/bookedInfo', { state: { carData: car, bookingData: bookingData} });
  };

  const CarDetails = ({ car }) => (
    <div className="car-details">
      <div className="image-section">
        <img src={`http://localhost:3001/uploads/${car.image}`} alt={car.model} />
      </div>
      <h2 className="title">{car.model}</h2>
      <div className="listing-section">
        <ul>
          <li>Company: {car.company}</li>
          <li>Year: {car.year}</li>
          <li>Status: {car.status}</li>
          <li>Available: {car.available}</li>
        </ul>
      </div>
      <div className="features">
        {/* Add other details as needed */}
      </div>
      <div className="price-section">
        <p>Price: {car.price}</p>
        <div className="btn">
          <button className="book-now-button" onClick={() => handleSubmit(car)}>Book Now</button>
        </div>
      </div>
    </div>
  );

  CarDetails.propTypes = {
    car: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      status: PropTypes.bool.isRequired,
      available: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <div className="book-navbar">
        <ul className="pagination">
          <li className= {location.pathname === "/vehicles" ? "active" : ""} >1 : Vehicles </li>
          <li className={location.pathname === "/book" ? "active " : ""}>2 : Booking Process</li>
          <li className={location.pathname === "/bookingConfirm" ? "active": ""}>3 : Confirm Booking</li>
        </ul>
      </div>

      <div className="sort-container">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="1">Select</option>
          <option value="2">Company</option>
          <option value="3">Year</option>
          <option value="4">Status</option>
          {/* Add more sorting options as needed */}
        </select>
      </div>

      <div className="car-list">
        {cars.map((car) => (
          <CarDetails key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
