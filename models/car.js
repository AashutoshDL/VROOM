const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    company : String,
    model : String,
    price : String
});

module.exports = mongoose.model('Car', dataSchema);