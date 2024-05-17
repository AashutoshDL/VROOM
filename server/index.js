    const express = require('express');
    const cors = require('cors');
    const connectDB = require('./config/dbConfig');
    const authController = require('./controllers/authController');
    const bookingController = require('./controllers/bookingController');
    const carController = require('./controllers/carController');
    const stripeController = require('./controllers/stripeController');
    const hireController = require('./controllers/hireController');
    const multer=require('multer')


    connectDB();

    const app = express();
    app.use(express.json());
    app.use(cors());

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/cars');
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    });

    const upload = multer({ storage });

    const driverStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/drivers');
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    });
    
    const driverUpload = multer({ storage: driverStorage });

    app.use('/cars',express.static('public/cars'))
    app.use('/drivers',express.static('public/drivers'))

    // Define routes and use the controller methods
    app.get('/api/cars', carController.getAllCars);
    app.get('/api/getCars/:id', carController.getCarById);
    app.post('/api/createCar', upload.single('file'), carController.createCar);
    app.put('/api/updateCar/:id', upload.single('file'), carController.updateCarById);
    app.delete('/api/deleteCar/:id', carController.deleteCarById);

    app.get('/api/drivers', hireController.getAllDrivers);
    app.post('/api/createDriver',driverUpload.single('file'),hireController.createDriver);
    app.get('/api/getDriver/:id', hireController.getDriverById);
    app.put('/api/updateDriver/:id',driverUpload.single('file'),hireController.updateDriverById);
    app.delete('/api/deleteDriver/:id',hireController.deleteDriverById);

    app.post('/api/createBooking', bookingController.createBooking);
    app.get('/api/getBooking', bookingController.getBookings);

    app.post('/api/register', authController.register);
    app.post('/api/login', authController.login);

    app.post('/api/payment',stripeController.processPayment);

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
