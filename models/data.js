const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

module.exports = mongoose.model('Data', dataSchema);