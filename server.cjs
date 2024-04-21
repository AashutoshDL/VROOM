const express = require('express');
const mongoose = require('mongoose');
const dataroutes = require('./dataRoutes');
const carroutes = require('./carRoutes');
const cors = require('cors')
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api/data', dataroutes);
app.use('/api/car', carroutes);

const url = 'mongodb://localhost:27017/vehicle_rental_system';
mongoose.connect(url);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
