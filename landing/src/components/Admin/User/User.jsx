 import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete('http://localhost:3001/deleteUser/' + id)
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
                    <h1 className="user-heading">User Information</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-end align-items-center">
                    <Link to="/createUser" className="btn btn-success">Add</Link>
                </div>
            </div>
            <table className="table mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Account Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                            <td>{user.accountType}</td>
                            <td>
                                <Link to={`/updateUser/${user._id}`} className="btn btn-primary mr-2">Update</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;