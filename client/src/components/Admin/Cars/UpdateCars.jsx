import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import background4 from "../../../components/ImagesFol/background4.png";
import './UpdateCars.css';
const UpdateCars = () => {
  const { id } = useParams();
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price,setPrice]=useState('');
  const [available, setAvailable] = useState('');
  const [status, setStatus] = useState('');
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/getCars/${id}`)
      .then(result => {
        const carData = result.data;
        setCompany(carData.company);
        setModel(carData.model);
        setYear(carData.year);
        setPrice(carData.price);
        setAvailable(carData.available);
        setStatus(carData.status);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('company', company);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('price', price);
    formData.append('available', available);
    formData.append('status', status);
  
    axios.put(`http://localhost:3001/api/updateCar/${id}`, formData)
      .then(result => {
        console.log(result);
        navigate('/cars');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='updatecar-container d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='updatecar-sub w-50 rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2 className='text-left mb-4 updatecarheader'>Update Cars</h2>
          <div className="mb-3">
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              placeholder='Enter company name'
              className='form-control'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              placeholder='Enter price'
              className='form-control'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              <option value='' disabled>Select Availability</option>
              <option value='available'>Available</option>
              <option value='booked'>Booked</option>
              <option value='not-avaibable'>Not Available</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor='status'>Status</label>
            <select
              placeholder='Enter status'
              className='form-control'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='' disabled>Select Status</option>
              <option value='in-service'>In Service</option>
              <option value='out-of-service'>Out of Service</option>
              <option value='pending'>Pending</option>
              <option value='rented'>Rented</option>
              <option value='reserved'>Reserved</option>
              <option value='returned'>Returned</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor='file' className="form-label">Car Image</label><br />
            <input
              type='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-secondary me-2' onClick={() => navigate('/cars')}>Back</button>
            <button type='submit' className='btn btn-success'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCars;
