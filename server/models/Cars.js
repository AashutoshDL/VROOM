const mongoose=require('mongoose')

const CarSchema=new mongoose.Schema({
    make:String,
    model:String,
    year: Number,
    available: String,
    status:String
})

const CarModel=mongoose.model("cars",CarSchema)
module.exports=CarModel