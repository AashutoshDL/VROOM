const express = require('express');
const cors = require('cors');
const app = express();
// const userRoutes = require('./routes/userRoutes');
// const carsRoutes = require('./routes/carRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');
// const authRoutes = require('./routes/authRoutes');
const userController=require('./controllers/userController')
const carController=require('./controllers/carController')
const authController=require('./controllers/authController')
const bookingController=require('./controllers/bookingController')
const paymentController=require('./controllers/esewaController')
const connectDB= require('./config/dbConfig')

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

connectDB();

// Routes
app.get('/api/getAllUser',userController.getAllUsers);
app.post('/api/createUser', userController.createUser);
app.get('/api/getUserById', userController.getUserById);
app.put('/api/updateUserById', userController.updateUserById);
app.delete('/api/deleteUserById', userController.deleteUserById);

app.get('/api/getAllCars',carController.getAllCars);
app.post('/api/createCar', carController.createCar);
app.get('/api/getCarById', carController.getCarById);
app.put('/api/updateCarById', carController.updateCarById);
app.delete('/api/deleteCarById', carController.deleteCarById);

app.post('/api/createBooking', bookingController.createBooking);
app.get('/api/getBookings', bookingController.getBookings);

app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

// Payment routes
app.post('/process-payment', paymentController.processPayment);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
