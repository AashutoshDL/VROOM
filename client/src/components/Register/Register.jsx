import { useState } from 'react';
import axios from 'axios';
import Popup from '../Popup/Popup';
import './Register.css';
import background2 from '../ImagesFol/background2.jpg'

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [accountType, setAccountType] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !phoneNumber || !age || !address || !accountType || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Make API call to register user
    axios.post('http://localhost:3001/register', {
      name,
      phoneNumber,
      age,
      address,
      accountType,
      password
    })
      .then(response => {
        console.log(response.data); // Log the response data
        setShowPopup(true); // Show the popup on successful registration
        // Clear form fields
        setName('');
        setPhoneNumber('');
        setAge('');
        setAddress('');
        setAccountType('');
        setPassword('');
      })
      .catch(error => {
        console.error('Error registering user:', error);
        alert('Error registering user. Please try again.'); // Show an alert for error
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className='register-container' style={{ backgroundImage: background2}}>
      <div className='register-form'>
        <form onSubmit={handleSubmit}>
          <h2 className="register-heading">Register</h2>
          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='phone number'>Phone Number</label>
            <input
              type='text'
              id='phoneNumber'
              placeholder='Enter phone number'
              className='form-control'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              id='age'
              placeholder='Enter age'
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              placeholder='Enter address'
              className='form-control'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Enter password'
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='accountType'>Account Type</label>
            <select
              id='accountType'
              className='form-select'
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value=''>Select Account Type</option>
              <option value='personal'>Personal Account</option>
              <option value='driver'>Driver Account</option>
            </select>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
      {showPopup && <Popup />}
    </div>
  );
};

export default Register;
