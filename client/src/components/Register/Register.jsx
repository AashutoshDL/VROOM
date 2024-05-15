import { useState } from 'react';
import axios from 'axios';
import Popup from '../Popup/Popup';
import './Register.css';
import backgroundVideo from '../ImagesFol/backvid.mp4';
import Footer from "../Footer/Footer";

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [accountType, setAccountType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for confirm password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !phoneNumber || !age || !address || !accountType || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if(password != confirmPassword){
      alert("Passwords does not match");
      return
    }

    // Make API call to register user
    axios.post('http://localhost:3001/api/register', {
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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <div className='register-container'>
      <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className='register-form'>
        <form onSubmit={handleSubmit} className='signup-form'>
          <h2 className="register-heading">Register</h2>
          <div className="form-group1">
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter name'
              className='form-control1'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor='phone number'>Phone Number</label>
            <input
              type='text'
              id='phoneNumber'
              placeholder='Enter phone number'
              className='form-control1'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              id='age'
              placeholder='Enter age'
              className='form-control1'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              placeholder='Enter address'
              className='form-control1'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor='password'>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Enter password'
                className='form-control1'
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
          <div className="form-group1">
            <label htmlFor='comfirmPassword'>Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirmPassword'
                placeholder='Confirm your password'
                className='form-control1'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="form-group1">
            <label htmlFor='accountType'>Account Type</label>
            <select
              id='accountType'
              className='form-select'
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value='' disabled>Select Account Type</option>
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
      <Footer />
    </div>
  );
};

export default Register;
