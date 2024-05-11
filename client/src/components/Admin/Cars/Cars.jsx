import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cars')
            .then(result => setCars(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete(`http://localhost:3001/deleteCars/${id}`)
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
                <div className="col-lg-10">
                    <h1 className="user-heading">Car Information</h1>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <Link to="/createCars" className="btn btn-success">Add Car</Link>
                </div>
            </div>
            <div className="mt-3">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Model</th>
                            <th scope="col">Year</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car._id}>
                                <td>{car.company}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.price}</td>
                                <td><img src={`http://localhost:3001/uploads/${car.image}`} alt="Car" style={{ maxWidth: '300px', maxHeight: '300px' }} /></td>
                                <td>{car.status}</td>
                                <td>
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
