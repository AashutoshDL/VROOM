import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background4 from "../../../components/ImagesFol/background4.png";
import './CreateCars.css';

const CreateCars = () => {
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price,setPrice]=useState('');
  const [available, setAvailable] = useState('');
  const [status, setStatus] = useState('');
  const [file,setFile]=useState();

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData=new FormData();
    formData.append('file',file);
    formData.append('company', company);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('price',price);
    formData.append('available', available);
    formData.append('status', status);

    axios.post('http://localhost:3001/api/createCar', formData)
      .then(result => {
        console.log(result);  
        navigate('/cars');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='createcar-container d-flex vh-100 bg-primary justify-content-center align-items-center' style={{ backgroundImage: background4 }}>
      <div className='createcar-sub w-50 rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Add Car</h2>
          <div className="mb-3">
            <label htmlFor='company' className="form-label">Company</label>
            <input
              type='text'
              id='company'
              placeholder='Enter name of the company'
              className='form-control'
              onChange={(e) => setCompany(e.target.value)}
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
            <label htmlFor='price' className="form-label">Price</label>
            <input
              type='text'
              id='price'
              placeholder='Enter price'
              className='form-control'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='available' className="form-label">Available</label>
            <select
              id='available'
              className='form-select'
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value=''>Select Availability</option>
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
            <div className="mb-3">
            <label htmlFor='status' className="form-label">Car Image</label><br />
            <input
              type='file'
              onChange={(e) => setFile(e.target.files[0])}
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
