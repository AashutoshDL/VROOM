import {useState, useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";

const UpdateUser = () => {

  const {id }= useParams();
  const [name,setName]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [age,setAge]=useState('');
  const [address,setAddress]=useState('');
  const [accountType, setAccountType] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {console.log(result)
        setName(result.data.name)
        setPhoneNumber(result.data.phoneNumber)
        setAge(result.data.age)
        setAddress(result.data.address)
      }) 
      .catch(err => console.log(err));
  }, [id]);
  
    const Update = (e) => {
      e.preventDefault();
      axios.put("http://localhost:3001/updateUser/"+id,{name,phoneNumber,age,address,accountType})
      .then(result => {console.log(result)
            navigate('/user')
          })
      .catch(err => console.log(err));
    }
  return (
    // Outer container with flexbox styling
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      {/* Inner container with white background and padding */}
      <div className='w-50 bg-white rounded p-3'>
        {/* Form for updating a user */}
        <form onSubmit={Update}>
          <h2 className='text-left mb-4'>Update User</h2>
          {/* Input field for name */}
          <div className="mb-3">
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter name' className='form-control'
            value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          {/* Input field for email */}
          <div className="mb-3">
            <label htmlFor=''>Phone Number</label>
            <input type='text' placeholder='Enter phone number' className='form-control'
            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          {/* Input field for age */}
          <div className="mb-3">
            <label htmlFor=''>Age</label>
            <input type='' placeholder='Enter age' className='form-control'
            value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor=''>Address</label>
            <input type='' placeholder='Enter address' className='form-control'
            value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>   
          <div className="mb-3">
          <label htmlFor=''>Account Type</label>
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
          {/* Update button */}
          <div className='d-flex justify-content-end'>
            <button className='btn btn-secondary me-2' onClick={() => navigate('/user')}>Back</button>
          <button className='btn btn-success'>Update</button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
 