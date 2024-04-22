import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCars = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [available, setAvailable] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createCars', { make, model, year, available, status})
      .then(result => {
        console.log(result);  
        navigate('/cars');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Add Car</h2>
          <div className="mb-3">
            <label htmlFor='make' className="form-label">Make</label>
            <input
              type='text'
              id='make'
              placeholder='Enter make'
              className='form-control'
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='model' className="form-label">Model</label>
            <input
              type='text'
              id='model'
              placeholder='Enter model'
              className='form-control'
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='year' className="form-label">Year</label>
            <input
              type='text'
              id='year'
              placeholder='Enter year'
              className='form-control'
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='available' className="form-label">Available</label>
            <select
              id='available'
              className='form-select'
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value=''>Select Account Type</option>
              <option value='yes'>Avialable</option>
              <option value='booked'>Booked</option>
              <option value='no'>Not Available</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor='status' className="form-label">Status</label>
            <input
              type='text'
              id='status'
              placeholder='Enter status'
              className='form-control'
              onChange={(e) => setStatus(e.target.value)}
            />       
            </div>   
          <div className="d-flex justify-content-end">
            <button className='btn btn-secondary me-2' onClick={() => navigate('/cars')}>Back</button>
            <button type="submit" className='btn btn-success'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCars;
