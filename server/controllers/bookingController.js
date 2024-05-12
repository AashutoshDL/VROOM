// controllers/bookingController.js
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  // Create booking logic
  try {
    const { carData, bookingData, dos, donts } = req.body;

    // Create a new booking document
    const newBooking = new Booking({
      carData,
      bookingData,
      dos,
      donts
    });

    // Save the booking to the database
    await newBooking.save();

    // Respond with success message
    res.status(201).json({ message: 'Booking submitted successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error submitting booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getBookings = async (req, res) => {
  // Get all bookings logic
  try {
    // Retrieve all bookings from the database
    const bookings = await Booking.find();

    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
