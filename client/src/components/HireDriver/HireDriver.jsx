import React, { useState, useEffect } from 'react';
import './HireDriver.css'; // Import the provided CSS file

const HireDriver = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/getAllDrivers');
        if (!response.ok) {
          throw new Error('Failed to fetch drivers');
        }
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <div className="driver-cards-container"> {/* Apply container class */}
      <h1>VROOM Drivers Rental Service</h1>
      <p>Select a driver for rental</p>
      <h2>List of Drivers:</h2>
      <div className="driver-cards">
        {drivers.map(driver => (
          <div key={driver.id} className="card">
            <div className="profile">
              <img src={driver.profileImage} alt={driver.name} />
            </div>
            <div className="name">{driver.name}</div>
            <div className="numbers">
              <table id="stats">
                <tbody>
                  <tr>
                    <td>Phone:</td>
                    <td>{driver.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>License:</td>
                    <td>{driver.licenseNumber}</td>
                  </tr>
                  <tr>
                    <td>Status:</td>
                    <td>{driver.status}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>{driver.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="btn">
              <a href="#" className="btn-follow">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireDriver;
