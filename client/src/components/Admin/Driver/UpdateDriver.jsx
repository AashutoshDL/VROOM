import { useEffect,useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom'
import axios from "axios";
import background4 from "../../../components/ImagesFol/background4.png";
import './UpdateDriver.css';
const UpdateDriver = () => {

  const {id} =useParams();
  const [name,setName]=useState('');
  const [licenseNumber,setLicenseNumber]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [status,setStatus]=useState('')
  const [address,setAddress]=useState('');
  const navigate=useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/getAllDriver/' + id)
      .then(result => {console.log(result)
        setName(result.data.name)
        setLicenseNumber(result.data.licenseNumber)
        setPhoneNumber(result.data.phoneNumber)
        setAddress(result.data.address)
        setStatus(result.data.status)
      }) 
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    const formData= new FormData();

    formData.append('name',name);
    formData.append('licenseNumber',licenseNumber)
    formData.append('phoneNumber',phoneNumber)
    formData.append('address',address)
    formData.append('status',status)
    
    axios.put(`http://localhost:3001/api/updateDriverById/${id}`,formData)
    .then(result => {console.log(result)
          navigate('/driver')
        })
    .catch(err => console.log(err));
  }
  return (
<div className='updatedriver-container d-flex vh-100 bg-primary justify-content-center align-items-center' style={{ backgroundImage: background4 }}>
      <div className='updatedriver-form w-50 rounded p-3'>
        {/* Form for updating a user */}
        <form onSubmit={Update}>
          <h2 className='text-left mb-4'>Update Driver</h2>
          {/* Input field for name */}
          <div className="mb-3">
            <label htmlFor=''>Driver</label>
            <input type='text' placeholder='Enter name' className='form-control'
            value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor=''>License Number</label>
            <input type='text' placeholder='Enter license number' className='form-control'
            value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)}/>
          </div>          
          <div className="mb-3">
            <label htmlFor=''>Phone Number</label>
            <input type='text' placeholder='Enter phone number' className='form-control'
            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor=''>Address</label>
            <input type='' placeholder='Enter address' className='form-control'
            value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>   
          <div className="mb-3">
          <label htmlFor=''>Status</label>
          <select
              id='status'
              className='form-select'
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='' disabled>Select Status</option>
              <option value='personal'>Available</option>
              <option value='driver'>Booked</option>
            </select>
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-secondary me-2' onClick={() => navigate('/driver')}>Back</button>
          <button className='btn btn-success'>Update</button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateDriver
