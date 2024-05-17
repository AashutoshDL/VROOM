const CarModel = require('../models/Cars'); // Ensure this is the correct path to your model

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await CarModel.find({});
        res.json(cars);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
    const id = req.params.id;
    try {
        const car = await CarModel.findById(id);
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new car
exports.createCar = async (req, res) => {
    const { company, model, year, price, available, status } = req.body;

    if(!req.file){
        return res.status(400).json({error:'Image file is required'});

    }

    const image = req.file.filename;
    const name = req.file.originalname;

    const carData = {
        company,
        model,
        year,
        price,
        available,
        status,
        name,
        image,
    };

    try {
        const car = await CarModel.create(carData);
        res.json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a car by ID
exports.updateCarById = async (req, res) => {
    const id = req.params.id;
    const { company, model, year, price, available, status } = req.body;
    const updatedData = {
        company,
        model,
        year,
        price,
        available,
        status,
    };

    if (req.file) {
        // If a new image is uploaded, update the image field
        const image = req.file.filename;
        updatedData.image = image;
    }

    try {
        const car = await CarModel.findByIdAndUpdate(id, updatedData, { new: true });
        res.json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a car by ID
exports.deleteCarById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await CarModel.findByIdAndDelete(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
