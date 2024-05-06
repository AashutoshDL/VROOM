import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./Home";
import User from "./components/Admin/User/User";
import Cars from "./components/Admin/Cars/Cars";
import CreateUser from "./components/Admin/User/CreateUser";
import UpdateUser from "./components/Admin/User/UpdateUser";
import CreateCars from "./components/Admin/Cars/CreateCars";
import UpdateCars from "./components/Admin/Cars/UpdateCars";
import AdminHome from "./components/Admin/AdminHome";
import Vehicles from "./components/Vehicles/Vehicles";
import ContactUs from "./components/contactUs/contactUs";
import Insurance from "./components/Insurance/Insunrance";
import BookedInfo from './components/BookedInfo/BookedInfo';
import UserProfile from "./components/UserProfile/UserProfile";


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
        <Route path="/bookedInfo" element={<BookedInfo />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/user" element={<User />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/createCars" element={<CreateCars />} />
        <Route path="/updateCars/:id" element={<UpdateCars />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/insurance" element={<Insurance />} />
      </Routes>
    </Router>
  );
}

export default App;
