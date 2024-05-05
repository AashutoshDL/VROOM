import  { useState, useEffect } from 'react';
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
            <Link to="/admin" className="btn btn-success">HOME</Link>
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="user-heading">Car Information</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-end align-items-center">
                    <Link to="/createCars" className="btn btn-success">Add Car</Link>
                </div>
            </div>
            <table className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car._id}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>
                                <Link to={`/updateCars/${car._id}`} className="btn btn-primary mr-2">Update</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(car._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
