import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createUser', { name, phoneNumber, age, address, accountType})
      .then(result => {
        console.log(result);  
        navigate('/user');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Add User</h2>
          <div className="mb-3">
            <label htmlFor='name' className="form-label">Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='phone number' className="form-label">Phone Number</label>
            <input
              type='text'
              id='phoneNumber'
              placeholder='Enter phone number'
              className='form-control'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='age' className="form-label">Age</label>
            <input
              type='text'
              id='age'
              placeholder='Enter age'
              className='form-control'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='address' className="form-label">Address</label>
            <input
              type='text'
              id='address'
              placeholder='Enter address'
              className='form-control'
              onChange={(e) => setAddress(e.target.value)}
            />       
            </div>   
            <div className="mb-3">
            <label htmlFor='accountType' className="form-label">Account Type</label>
            <select
              id='accountType'
              className='form-select'
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value=''>Select Account Type</option>
              <option value='personal'>Personal Account</option>
              <option value='driver'>Driver Account</option>
            </select>
          </div>
          <div className="d-flex justify-content-end">
            <button className='btn btn-secondary me-2' onClick={() => navigate('/user')}>Back</button>
            <button type="submit" className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
