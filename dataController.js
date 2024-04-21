const Data = require('./models/data');

exports.getAllData =  async (req, res) => {
    try{
        const data = await Data.find({});
        res.json(data);
    }catch (err) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}

exports.createData = async (req, res) => {
    try {
      const newData = new Data(req.body);
      const savedData = await newData.save();
      res.json({ status: "success", id: savedData._id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
};