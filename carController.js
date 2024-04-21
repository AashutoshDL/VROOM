const Car = require('./models/car');

exports.getAllCar = async (req, res) => {
    try{
        const car = await Car.find({});
        res.json(car);
    } catch (err){
        console.log(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}


exports.createCar = async (req, res) => {
    try{
        const newCar = new Car(req.body);
        const savedData = await newCar.save();
        res.json({status : "successful", id : savedData._id});
    } catch (err){
        console.log(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}