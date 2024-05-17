const mongoose=require('mongoose')

const CarSchema=new mongoose.Schema({
    company:String,
    model:String,
    year: Number,
    price:Number,
    available: String,
    status:String,
    image:String,
})

const CarModel=mongoose.model("cars",CarSchema)
module.exports=CarModel 