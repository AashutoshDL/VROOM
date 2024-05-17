import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import background4 from "../../../components/ImagesFol/background4.png";
import './User.css';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/getAllUser')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            axios.delete('http://localhost:3001/api/deleteUserById' + id)
                .then(res => {
                    console.log(res);
                    window.location.reload(); // Refreshing the page after successful deletion
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="admin-container mt-5" style={{ backgroundImage: background4 }}>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="user-heading">User Information</h1>
                </div>
                <div className="adduserbtn col-lg-6 d-flex justify-content-end">
                    <Link to="/createUser" className="adduser-btn">Add User</Link>
                </div>
            </div>
            <table className="table mt-3 usercontainertable">
                <thead className="thead-dark userthead">
                    <tr>
                        <th scope="col" className='user-labeltitle'>UserName</th>
                        <th scope="col" className='user-labeltitle'>Phone Number</th>
                        <th scope="col" className='user-labeltitle'>Age</th>
                        <th scope="col" className='user-labeltitle'>Address</th>
                        <th scope="col" className='user-labeltitle'>Account Type</th>
                        <th scope="col" className='user-labeltitle'>Image</th>
                        <th scope="col" className='user-labeltitle'>Action</th>
                    </tr>
                </thead>
                <tbody className='userbody'>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className='user-information'>{user.name}</td>
                            <td className='user-information'>{user.phoneNumber}</td>
                            <td className='user-information'>{user.age}</td>
                            <td className='user-information'>{user.address}</td>
                            <td className='user-information'><img src={`http://localhost:3001/uploads/${user.image}`} alt="User" style={{ maxWidth: '300px', maxHeight: '300px' }} /></td>
                            <td className='user-information'>{user.accountType}</td>
                            <td className='user-information'>
                                <Link to={`/updateUser/${user._id}`} className="updateuser-btn btn-dark">Update</Link>
                                <button className="deleteuser-btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
