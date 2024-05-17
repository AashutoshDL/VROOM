import React, { useState, useEffect } from 'react';
import './HireDriver.css'; // Import the provided CSS file
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './HireDriver.css'

const HireDriver = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/drivers');
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
    <div className="driver-cards-container">
      <h2>List of Drivers:</h2>
      <div className="driver-cards">
        {drivers.map(driver => (
          <div key={driver.id} className="card">
            <div className="name">{driver.userName}</div>
            <div className="numbers">
              <table id="stats">
                <tbody>
                  <tr>
                    <td><img src={`http://localhost:3001/drivers/${driver.image}`} alt="DriverImg" style={{maxHeight:'300%' ,maxWidth:'180%'}}></img></td>
                  </tr>
                  <tr>
                    <td>License Number:</td>
                    <td>{driver.licenseNumber}</td>
                  </tr>
                  <tr>
                    <td>Driver Status:</td>
                    <td>{driver.status}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>{driver.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Popup trigger={<button className="btn-follow">Book</button>} position="right center">
                <h3>Call to Confirm Your Ride</h3>
                <p><strong>Contact No:</strong> {driver.phoneNumber}</p>
            </Popup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireDriver;
