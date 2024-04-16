import { useState, useEffect } from 'react';
import img1 from '../ImagesFol/byd.jpg';
import img2 from '../ImagesFol/nexon.png';
import img3 from '../ImagesFol/scorpio.png';
import img4 from '../ImagesFol/verna.png';
import '../Vehicles/Vehicles.css'
// Sample car data
const cars = [
  {
    id: 1,
    imgSrc: img1,
    title: 'BYD - Car',
    passenger: 5,
    doors: 4,
    type: 'Compact SUV',
    luggage: '3 bags',
    features: ['Blind Spot Detection', 'Moon Roof', 'Automatic Transmission', 'Air Conditioning'],
    price: 'NPR 50,000'
  },
  {
    id: 2,
    imgSrc: img2,
    title: 'TATA Nexon - Car',
    passenger: 4,
    doors: 4,
    type: 'Compact SUV',
    luggage: '3 bags',
    features: ['Keyless Entry/Start', 'Air Conditioning', 'Sun Roof', 'Automatic Transmission'],
    price: 'NPR 45,000'
  },
  {
    id: 3,
    imgSrc: img3,
    title: 'Scorpio - Jeep',
    passenger: 7,
    doors: 4,
    type: 'SUV',
    luggage: '5 bags',
    features: ['High ground clearance', 'Four-Wheel Drive (4WD)', 'Air Conditioning', 'Manual Transmission'],
    price: 'NPR 65,000'
  },
  {
    id: 4,
    imgSrc: img4,
    title: 'Verna - Sedan',
    passenger: 4,
    doors: 4,
    type: 'Sedan',
    luggage: '4 bags',
    features: ['Comfortable Seat', 'Infotainment System', 'Air Conditioning', 'Automatic Transmission'],
    price: 'NPR 30,000'
  }
];

// Reusable CarDetails component
const CarDetails = ({ car }) => (
  <div className="car-details">
    <div className="image-section">
      <img src={car.imgSrc} alt={car.title} />
    </div>
    <h2 className="title">{car.title}</h2>
    <div className="listing-section">
      <ul>
        <li>Passenger: {car.passenger}</li>
        <li>Doors: {car.doors}</li>
        <li>Type: {car.type}</li>
        <li>Luggage: {car.luggage}</li>
      </ul>
    </div>
    <div className="features">
      <ul>
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="price-section">
      <p>Estimated Price</p>
      <p>{car.price}</p>
      <div className="btn">
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  </div>
);

// Main CarList component
const Vehicles= () => {
  const [sortBy, setSortBy] = useState('1');
  const [sortedCars, setSortedCars] = useState([]);

  // Update sortedCars based on sortBy value
  useEffect(() => {
    let sorted = [];

    switch (sortBy) {
      case '2':
        sorted = cars.slice().sort((a, b) => a.passenger - b.passenger);
        break;
      case '3':
        sorted = cars.slice().sort((a, b) => a.price.localeCompare(b.price));
        break;
      case '4':
        sorted = cars.slice().sort((a, b) => b.passenger - a.passenger);
        break;
      default:
        sorted = cars.slice(); // Default sort by ID
        break;
    }

    setSortedCars(sorted);
  }, [sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      {/* Navigation and sorting dropdown */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/1">1 - Search</a></li>
          <li><a href="/2" className="availability-link">2 - Availability</a></li>
          <li><a href="/3">3 - Book</a></li>
          <li><a href="/4">4 - Confirm</a></li>
        </ul>
      </nav>

      <div className="sort-container">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="1">Select</option>
          <option value="2">Passenger Count</option>
          <option value="3">Price (Low to High)</option>
          <option value="4">Passenger Count (High to Low)</option>
        </select>
      </div>

      {/* Render car details based on sortedCars */}
      <div className="car-list">
        {sortedCars.map((car) => (
          <CarDetails key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
