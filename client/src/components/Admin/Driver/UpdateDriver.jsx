import { useEffect,useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom'
import axios from "axios";

const UpdateDriver = () => {

  const {id} =useParams();
  const [userName,setUserName]=useState('');
  const [licenseNumber,setLicenseNumber]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [address,setAddress]=useState('');
  const [status,setStatus]=useState('')
  const [file,setFile]=useState('');
  
  const navigate=useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/getDriver/${id}`)
      .then(result =>
        {
          const driverData=result.data;
        setUserName(driverData.data.userName)
        setLicenseNumber(driverData.data.licenseNumber)
        setPhoneNumber(driverData.data.phoneNumber)
        setAddress(driverData.data.address)
        setStatus(driverData.data.status)
      }) 
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {

    e.preventDefault();

    const drivData= new FormData();

    drivData.append('file',file)
    drivData.append('userName',userName);
    drivData.append('licenseNumber',licenseNumber)
    drivData.append('phoneNumber',phoneNumber)
    drivData.append('address',address)
    drivData.append('status',status)
    
    axios.put(`http://localhost:3001/api/updateDriver/${id}`, drivData)
    .then(result => {console.log(result)
          navigate('/drivers')
        })
    .catch(err => console.log(err));
  }
  return (
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        {/* Form for updating a user */}
        <form onSubmit={handleUpdate}>
          <h2 className='text-left mb-4'>Update Driver</h2>
          {/* Input field for name */}
          <div className="mb-3">
            <label htmlFor=''>Driver</label>
            <input   
              type='text' 
              placeholder='Enter name' 
              className='form-control'
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
              />
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
          <div className="mb-3">
            <label htmlFor='image' className="form-label">Driver Image</label><br />
            <input
              type='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-secondary me-2' onClick={() => navigate('/drivers')}>Back</button>
          <button className='btn btn-success'>Update</button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateDriver
