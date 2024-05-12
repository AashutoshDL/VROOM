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
  const [file,setFile]=useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('age', age);
    formData.append('address', address);
    formData.append('accountType', accountType);
    formData.append('file', file);
    
    axios.post('http://localhost:3001/api/createUser', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(result => {
      console.log(result);  
      navigate('/user');
    })
    .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-110 bg-primary justify-content-center align-items-center'>
      <div className='vh-102 w-50 bg-white rounded p-3'>
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
          <div className="mb-3">
            <label htmlFor='image' className="form-label">User Image</label>
            <input
              type='file'
              onChange={(e) => setFile(e.target.files[0])}
            />       
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
