const express = require('express');
const router = express.Router();
const datacontroller = require('./dataController');

router.get('/',datacontroller.getAllData);
router.post('/',datacontroller.createData);

module.exports = router;