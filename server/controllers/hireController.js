const DriverModel = require('../models/Drivers');

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await DriverModel.find();
    res.json(drivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new user
exports.createDriver = async (req, res) => {
  try {
    const {userName,phoneNumber,licenseNumber,address,status}=req.body

    const driverData={
        userName,
        licenseNumber,
        phoneNumber,
        address,
        status
    }

    const newDriver = await DriverModel.create(driverData);
    res.json(newDriver);
    
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(400).json({ error: error.message });
  }
};

// Get user by ID
exports.getDriverById = async (req, res) => {
  const id = req.params.id;
  try {
    const driver = await DriverModel.findById(id);
    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }
    res.json(driver);
  } catch (error) {
    console.error('Error fetching driver:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update user by ID
exports.updateDriverById = async (req, res) => {
    const id = req.params.id;
    const {userName,phoneNumber,licenseNumber,address,status}=req.body
    const updatedData={
        userName,
        licenseNumber,
        phoneNumber,
        address,
        status
    }
    
    try {
      const updatedDriver = await DriverModel.findByIdAndUpdate(id, updatedData, { new: true });
      res.json(updatedDriver);
    } catch (error) {
      console.error('Error updating driver:', error);
      res.status(400).json({ error: error.message });
    }
  };
  

// Delete user by ID
exports.deleteDriverById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedDriver = await DriverModel.findByIdAndDelete(id);
    res.json(deletedDriver);
  } catch (error) {
    console.error('Error deleting driver:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
