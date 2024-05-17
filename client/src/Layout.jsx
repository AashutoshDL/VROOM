import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./Home";
import Cars from "./components/Admin/Cars/Cars";
import CreateCars from "./components/Admin/Cars/CreateCars";
import UpdateCars from "./components/Admin/Cars/UpdateCars";
import AdminHome from "./components/Admin/AdminHome";
import Vehicles from "./components/Vehicles/Vehicles";
import ContactUs from "./components/contactUs/contactUs";
import Insurance from "./components/insurance/Insunrance";
import BookedInfo from './components/BookedInfo/BookedInfo';
import UserProfile from "./components/UserProfile/UserProfile";
import Details from "./components/Payment/Details.jsx";
import PaymentSuccess from './components/Payment/PaymentSuccess.jsx';
import Driver from './components/Admin/Driver/Driver'
import CreateDriver from './components/Admin/Driver/CreateDriver'
import UpdateDriver from './components/Admin/Driver/UpdateDriver'
import HireDriver from "./components/HireDriver/HireDriver"
import Map from './components/Booking/Map'


function Layout() {
  return (
    <div>
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/hireDriver" element={<HireDriver />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/bookedInfo" element={<BookedInfo />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/details" element={<Details />} />
        <Route path="/map" element={<Map />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/createCar" element={<CreateCars />} />
        <Route path="/updateCar/:id" element={<UpdateCars />} />
        <Route path="/drivers" element={<Driver />} />
        <Route path="/createDriver" element={<CreateDriver />} />
        <Route path="/updateDriver/:id" element={<UpdateDriver />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
    </div>
  )
}

export default Layout
