import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateDriver.css';
import background4 from "../../../components/ImagesFol/background4.png";
const CreateDriver = () => {
    const [name, setName] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('licenseNumber', licenseNumber);
        formData.append('phoneNumber', phoneNumber);
        formData.append('address', address);
        formData.append('status', status);        
        
        axios.post('http://localhost:3001/api/createDriver', formData)
        .then(result => {
          console.log(result);  
          navigate('/driver');
        })
        .catch(err => console.log(err));
      };

    return (
        <div className='createdriver-container' style={{ backgroundImage: background4 }}>
            <div className="createdriver-sub">
                 <h2 className='createdriver-header'>Add Driver</h2>
            <form onSubmit={handleSubmit} className='createdriver-form'>
                <div className='form-control3'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control3'>
                    <label htmlFor="license">License Number:</label>
                    <input
                        type="text"
                        id="license"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control3'>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className='form-control3'>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select status</option>
                        <option value="available">Available</option>
                        <option value="booked">Booked</option>
                    </select>
                </div>
                <div className='form-control3'>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Driver</button>
            </form>
            </div>
        </div>
    );
};

export default CreateDriver;
