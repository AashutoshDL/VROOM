import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import background4 from "../../../components/ImagesFol/background4.png";
import './Driver.css';

const Driver = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllDrivers')
            .then(result => setDrivers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete(`http://localhost:3001/api/deleteDriverById/${id}`)
                .then(res => {
                    console.log(res);
                    window.location.reload(); // Refreshing the page after successful deletion
                })
                .catch(err => console.log(err));
        }
    };
    return (
        <div className="driver-container mt-5" style={{ backgroundImage: background4 }}>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="driver-heading">Driver Information</h1>
                </div>
                <div className="addDriver col-lg-6 d-flex justify-content-end">
                    <Link to="/createDriver" className="driveradd-btn">Add Driver</Link>
                </div>
            </div>
            <table className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className='driver-labels'>Name</th>
                        <th scope="col" className='driver-labels'>License Number</th>
                        <th scope="col" className='driver-labels'>Phone Number</th>
                        <th scope="col" className='driver-labels'>Address</th>
                        <th scope="col" className='driver-labels'>Action</th>
                    </tr>
                </thead>
                <tbody className='driverbody'>
                    {drivers.map((driver) => (
                        <tr key={driver._id}>
                            <td className='driver-information'>{driver.name}</td>
                            <td className='driver-information'>{driver.licenseNumber}</td>
                            <td className='driver-information'>{driver.phoneNumber}</td>
                            <td className='driver-information'>{driver.address}</td>
                            <td className='driver-information'>
                                <Link to={`/updateDriver/${driver._id}`} className="btn btn-dark mr-2">Update</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(driver._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Driver;
