import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hire = () => {
    const [driverUsers, setDriverUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllUser')
            .then(result => {
                // Filter users with accountType as "driver"
                const driverUsers = result.data.filter(user => user.accountType === 'driver');
                setDriverUsers(driverUsers);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="header">
                <div className="header-2">
                    <h1>Welcome to Vroom </h1>
                    <h1>Drivers Rental Service</h1>
                    <p>List of Available Drivers</p>
                </div>
            </div>
            <div className="available-drivers">
                <div className="available-driver-1">
                    <h2>Available Drivers</h2>
                </div>
                <div className="available-driver-2">
                    <ul>
                        {driverUsers.map(user => (
                            <li key={user._id}>
                                <div>
                                    <img src={user.image} alt={user.name} />
                                </div>
                                <div className='name'> {user.name}</div>
                                <div className='status'> {user.accountType}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hire;
