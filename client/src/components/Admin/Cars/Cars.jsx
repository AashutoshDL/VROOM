import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import background4 from "../../../components/ImagesFol/background4.png";
import './Cars.css';

const User = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllCars')
            .then(result => setCars(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete(`http://localhost:3001/api/deleteCarById/${id}`)
                .then(res => {
                    console.log(res);
                    window.location.reload(); // Refreshing the page after successful deletion
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="cars-container mt-5"  style={{ backgroundImage: background4 }}>
            <div className="row">
                <div className="col-lg-10">
                    <h1 className="car-heading">Car Information</h1>
                </div>
                <div className="addcarbtn col-lg-6 d-flex justify-content-center align-items-center">
                    <Link to="/createCars" className="addcars-btn btn-success">Add Car</Link>
                </div>
            </div>
            <div className="addcarstable mt-3">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className='carlabel-title'>Company</th>
                            <th scope="col" className='carlabel-title'>Model</th>
                            <th scope="col" className='carlabel-title'>Year</th>
                            <th scope="col" className='carlabel-title'>Price</th>
                            <th scope="col" className='carlabel-title'>Image</th>
                            <th scope="col" className='carlabel-title'>Status</th>
                            <th scope="col" className='carlabel-title'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car._id}>
                                <td className='car-information'>{car.company}</td>
                                <td className='car-information'>{car.model}</td>
                                <td className='car-information'>{car.year}</td>
                                <td className='car-information'>{car.price}</td>
                                <td className='car-information'><img src={`http://localhost:3001/uploads/${car.image}`} alt="Car" style={{ maxWidth: '300px', maxHeight: '300px' }} /></td>
                                <td className='car-information'>{car.status}</td>
                                <td className='car-information'>
                                    <Link to={`/updateCars/${car._id}`} className="btn btn-secondary me-2">Update</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(car._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
