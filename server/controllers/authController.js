const express = require('express');
const router = express.Router();
const LoginModel = require('../models/Login');

// Register endpoint
exports.register = async (req, res) => {
    try {
        // Check if user with given phone number exists
        const existingUser = await LoginModel.findOne({ phoneNumber: req.body.phoneNumber });

        if (existingUser)
            return res.status(409).json({ message: "User with given phone number already exists!!" });

        // Create a new user with the provided phone number
        const newUser = await LoginModel.create(req.body);

        res.status(201).json({ message: "User Created Successfully", newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login endpoint
exports.login = async (req, res) => {
    const { phoneNumber, password } = req.body;
    try {
        // Check if user with given phone number exists
        const user = await LoginModel.findOne({ phoneNumber });

        if (!user) 
            return res.status(400).json({ message: "User Not Found!!" });

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        res.json({ message: "Login Successful", name: user.name, phoneNumber:user.phoneNumber});

    } catch (err) {
        console.error("Error during Login:", err);
        res.status(500).json({ error: err.message });
    }   
};