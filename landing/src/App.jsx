import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './Home';
import User from './components/Admin/User/User';
import Cars from './components/Admin/Cars/Cars';
import CreateUser from './components/Admin/User/CreateUser';
import UpdateUser from './components/Admin/User/UpdateUser';
import CreateCars from './components/Admin/Cars/CreateCars';
import UpdateCars from './components/Admin/Cars/UpdateCars';
import AdminHome from './components/Admin/AdminHome';
import Vehicles from './components/Vehicles/Vehicles';
import CarBookingForm from './components/CarBookingForm/CarBookingForm';
import CarOrderConfirmation from "./components/CarOrderConfirmation/CarOrderConfirmation";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/carbookingform/:id" element={<CarBookingForm />} />
        <Route path="/carorderconfirmation/:id" element={<CarOrderConfirmation />} />
        <Route path="/user" element={<User />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/createCars" element={<CreateCars />} />
        <Route path="/updateCars/:id" element={<UpdateCars />} />
      </Routes>
    </Router>
  );
}

export default App;