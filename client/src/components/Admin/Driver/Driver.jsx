    import { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import axios from 'axios';
    import background4 from "../../../components/ImagesFol/background4.png";
import './Driver.css';

    const Driver = () => {
        const [drivers, setDrivers] = useState([]);

        useEffect(() => {
            axios.get('http://localhost:3001/api/drivers')
                .then(result => setDrivers(result.data))
                .catch(err => console.log(err));
        }, []);

        const handleDelete = (id) => {
            if (window.confirm("Are you sure you want to delete this record?")) {
                axios.delete(`http://localhost:3001/api/deleteDriver/${id}`)
                    .then(res => {
                        console.log(res);
                        window.location.reload(); // Refreshing the page after successful deletion
                    })
                    .catch(err => console.log(err));
            }
        };
        return (
            <div className="driver-container mt-5" style={{ backgroundImage: background4 }}>
                <div className="drivercontainer-sub">
                    <div className="row">
                    <div className="col-lg-6">
                        <h1 className="driver-heading">Driver Information</h1>
                    </div>
                    <div className="addDriver col-lg-6 d-flex justify-content-end">
                        <Link to="/createDriver" className="driveradd-btn">Add Driver</Link>
                    </div>
                </div>
                <table className="driver-table mt-3">
                    <thead className="thead-dark driver-thead">
                        <tr>
                            <th scope="col" className='driver-labels'>Name</th>
                            <th scope="col" className='driver-labels'>License Number</th>
                            <th scope="col" className='driver-labels'>Phone Number</th>
                            <th scope="col" className='driver-labels'>Address</th>
                            <th scope="col" className='driver-labels'>Status</th>
                            <th scope="col" className='driver-labels'>Image</th>
                            <th scope="col" className='driver-labels'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='driverbody'>
                        {drivers.map((driver) => (
                            <tr key={driver._id}>
                                <td className='driver-information'>{driver.userName}</td>
                                <td className='driver-information'>{driver.licenseNumber}</td>
                                <td className='driver-information'>{driver.phoneNumber}</td>
                                <td className='driver-information'>{driver.address}</td>
                                <td className='driver-information'>{driver.status}</td>
                                <td className='driver-information'><img src={`http://localhost:3001/drivers/${driver.image}`} className='driver-images'  alt="Driver" style={{ maxWidth: '300px', maxHeight: '300px' }} /></td>
                                <td className='driver-information'>
                                    <Link to={`/updateDriver/${driver._id}`} className="updatebtndriver btn btn-dark mr-2">Update</Link>
                                    <button className="btn btn-danger deletebtndriver" onClick={() => handleDelete(driver._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        );
    };

    export default Driver;
