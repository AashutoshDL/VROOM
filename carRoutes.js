const express = require('express');
const router = express.Router();
const carcontroller = require('./carController');

router.get('/',carcontroller.getAllCar);
router.post('/',carcontroller.createCar);

module.exports = router;