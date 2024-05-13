const mongoose = require('mongoose');

// Define the schema for the booking
const bookingSchema = new mongoose.Schema({
  carData: Object,
  bookingData: Object,
  dos: [String],
  donts: [String]
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking; // Export the Booking model
