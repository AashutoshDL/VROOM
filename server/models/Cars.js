const mongoose=require('mongoose')

const CarSchema=new mongoose.Schema({
<<<<<<< HEAD
    make:String,
    model:String,
    year: Number,
    available: String,
    status:String
=======
    company:String,
    model:String,
    year: Number,
    price:Number,
    available: String,
    status:String,
    name:String,
    image:String,
>>>>>>> 861b31e74e50e796eec32973c6c1678e7fa1dc95
})

const CarModel=mongoose.model("cars",CarSchema)
module.exports=CarModel