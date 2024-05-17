// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const User = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001/api/getAllUser')
//             .then(result => setUsers(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = (id) => {
//         if (window.confirm("Are you sure you want to delete this record?")) {
//             axios.delete('http://localhost:3001/api/deleteUserById' + id)
//                 .then(res => {
//                     console.log(res);
//                     window.location.reload(); // Refreshing the page after successful deletion
//                 })
//                 .catch(err => console.log(err));
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-lg-6">
//                     <h1 className="user-heading">User Information</h1>
//                 </div>
//                 <div className="col-lg-6 d-flex justify-content-end">
//                     <Link to="/createUser" className="btn">Add User</Link>
//                 </div>
//             </div>
//             <table className="table mt-3">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th scope="col">UserName</th>
//                         <th scope="col">Phone Number</th>
//                         <th scope="col">Age</th>
//                         <th scope="col">Address</th>
//                         <th scope="col">Account Type</th>
//                         <th scope="col">Image</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.name}</td>
//                             <td>{user.phoneNumber}</td>
//                             <td>{user.age}</td>
//                             <td>{user.address}</td>
//                             <td><img src={`http://localhost:3001/uploads/${user.image}`} alt="User" style={{ maxWidth: '300px', maxHeight: '300px' }} /></td>
//                             <td>{user.accountType}</td>
//                             <td>
//                                 <Link to={`/updateUser/${user._id}`} className="btn btn-dark mr-2">Update</Link>
//                                 <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default User;
