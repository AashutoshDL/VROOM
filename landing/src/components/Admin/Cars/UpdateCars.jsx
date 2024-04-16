import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateCars = () => {
  const { id } = useParams();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [available, setAvailable] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getCars/' + id)
      .then(result => {
        console.log(result);
        setMake(result.data.make);
        setModel(result.data.model);
        setYear(result.data.year);
        setAvailable(result.data.available);
        setStatus(result.data.status);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateCars/" + id, { make, model, year, available, status })
      .then(result => {
        console.log(result);
        navigate('/cars');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2 className='text-left mb-4'>Update Car</h2>
          <div className="mb-3">
            <label htmlFor='make'>Make</label>
            <input
              type='text'
              placeholder='Enter make'
              className='form-control'
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='model'>Model</label>
            <input
              type='text'
              placeholder='Enter model'
              className='form-control'
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='year'>Year</label>
            <input
              type='text'
              placeholder='Enter year'
              className='form-control'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='available'>Available</label>
            <select
              id='available'
              className='form-select'
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value=''>Select Availability</option>
              <option value='yes'>Available</option>
              <option value='booked'>Booked</option>
              <option value='no'>Not Available</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor='status'>Status</label>
            <input
              type='text'
              placeholder='Enter status'
              className='form-control'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-secondary me-2' onClick={() => navigate('/cars')}>Back</button>
            <button className='btn btn-success'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCars;
