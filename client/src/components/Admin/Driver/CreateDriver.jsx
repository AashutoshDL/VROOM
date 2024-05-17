import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateDriver = () => {
    const [userName, setUserName] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');
    const [address, setAddress] = useState('');
    const [file,setFile]=useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const drivData = new FormData();
        drivData.append('userName', userName);
        drivData.append('licenseNumber', licenseNumber);
        drivData.append('phoneNumber', phoneNumber);
        drivData.append('address', address);
        drivData.append('status', status);  
        drivData.append('file',file)      
        
        axios.post('http://localhost:3001/api/createDriver', drivData)
        .then(result => {
          console.log(result);  
          navigate('/drivers');
        })
        .catch(err => console.log(err));
      };

    return (
        <div>
            <h2>Add Driver</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Name:</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="license">License Number:</label>
                    <input
                        type="text"
                        id="license"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
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
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <button className='btn btn-secondary me-2' onClick={() => navigate('/drivers')}>Back</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateDriver;
