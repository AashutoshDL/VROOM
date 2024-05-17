// models/Payment.js

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cars', // Assuming you have a Car model
    required: true,
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
