// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const { generateAuthToken } = require('./auth');
const UserModel = require('./models/Users'); // Importing UserModel
const CarsModel = require('./models/Cars'); // Importing CarsModel
const LoginModel = require('./models/Login'); // Importing LoginModel

const app = express();
app.use(cors());
app.use(express.json());

// Connection with the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/crud");

// Registration route
app.post("/register", (req, res) => {
    LoginModel.create(req.body)
        .then(login => res.json(login))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Login route
app.post("/login", async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        // Check if user exists in the database
        const user = await LoginModel.findOne({ phoneNumber });

        // If user not found, redirect to registration page
        if (!user) {
            // You can change the status code to indicate redirection
            return res.status(302).json({ redirectTo: "/register", message: "User not registered. Redirecting to registration page." });
        }

        // If user exists, check password
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // If credentials are valid, respond with success message
        res.json({ message: "Login successful",
        name: user.name });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// User Routes
// These routes will work with the UserModel
app.get('/user', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => console.log(err))
});

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, phoneNumber: req.body.phoneNumber, address: req.body.address, accountType: req.body.accountType })
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

// Cars Routes
// These routes will work with the CarsModel
app.get('/cars', (req, res) => {
    CarsModel.find({})
        .then(cars => res.json(cars))
        .catch(err => console.log(err))
});

app.post("/createCars", (req, res) => {
    CarsModel.create(req.body)
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
});

app.get('/getCars/:id', (req, res) => {
    const id = req.params.id;
    CarsModel.findById({ _id: id })
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
});

app.put('/updateCars/:id', (req, res) => {
    const id = req.params.id;
    CarsModel.findByIdAndUpdate({ _id: id }, { make: req.body.make, model: req.body.model, year: req.body.year, available: req.body.available, status: req.body.status })
        .then(cars => res.json(cars))
        .catch(err => res.json(err))
});

app.delete('/deleteCars/:id', (req, res) => {
    const id = req.params.id;
    CarsModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

// Listening on port 3001 for incoming requests
app.listen(3001, () => {
    console.log("Server is Running");
});
