const multer = require('multer');
const CarsModel = require('../models/Cars');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

exports.getAllCars = async (req, res) => {
  try {
    const cars = await CarsModel.find({});
    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createCar = async (req, res) => {
  try {
    const { company, model, year, price, available, status } = req.body;
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

    const newCar = await CarsModel.create(carData);
    res.json(newCar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getCarById = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await CarsModel.findById(id);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json(car);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

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
    const updatedCar = await CarsModel.findByIdAndUpdate({ _id: id }, updatedData, { new: true });
    res.json(updatedCar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteCarById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await CarsModel.findByIdAndDelete({ _id: id });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
