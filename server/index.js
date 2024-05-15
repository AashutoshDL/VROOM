const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const authController = require('./controllers/authController');
const bookingController = require('./controllers/bookingController');
const carController = require('./controllers/carController');
const userController = require('./controllers/userController');
const hireController = require('./controllers/hireController');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

connectDB();

// Routes for user, car, booking, and authentication
app.get('/api/getAllUser', userController.getAllUsers);
app.post('/api/createUser', userController.createUser);
app.get('/api/getUserById', userController.getUserById);
app.put('/api/updateUserById', userController.updateUserById);
app.delete('/api/deleteUserById', userController.deleteUserById);

app.get('/api/getAllDrivers', hireController.getAllDrivers);
app.post('/api/createDriver', hireController.createDriver);
app.get('/api/getDriverById', hireController.getDriverById);
app.put('/api/updateDriverById', hireController.updateDriverById);
app.delete('/api/deleteDriverById', hireController.deleteDriverById);

app.get('/api/getAllCars', carController.getAllCars);
app.post('/api/createCar', carController.createCar);
app.get('/api/getCarById', carController.getCarById);
app.put('/api/updateCarById', carController.updateCarById);
app.delete('/api/deleteCarById', carController.deleteCarById);

app.post('/api/createBooking', bookingController.createBooking);
app.get('/api/getBookings', bookingController.getBookings);

app.post('/api/register', authController.register);
app.post('/api/login', authController.login);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
