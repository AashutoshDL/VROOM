import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="user-heading">Driver Information</h1>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <Link to="/createDriver" className="btn">Add Driver</Link>
                </div>
            </div>
            <table className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">License Number</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Status</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver) => (
                        <tr key={driver._id}>
                            <td>{driver.name}</td>
                            <td>{driver.licenseNumber}</td>
                            <td>{driver.phoneNumber}</td>
                            <td>{driver.address}</td>
                            <td>
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
