const mongoose = require('mongoose');

// Define the schema for the bookings collection
const bookingSchema = new mongoose.Schema({
    company: String,
    model: String,
    year: Number,
    price: Number,
    name:String,
    image:String,
    available: Boolean,
    status: String,
    input1: String,
    input2: String,
    pickUpDate: Date,
    dropOffDate: Date,
  });

// Create the BookingsModel using the bookingSchema
const BookingsModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingsModel;
