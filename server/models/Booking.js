const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  paymentResponse: Object,
  carData: Object,
  bookingData: Object,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
