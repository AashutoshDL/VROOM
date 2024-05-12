// config/dbConfig.js
const mongoose = require('mongoose');

const uri = "mongodb+srv://aashudahal11:eyMFcdqNUk5ebfPc@vroom.tgtbyuu.mongodb.net/?retryWrites=true&w=majority&appName=vroom";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
