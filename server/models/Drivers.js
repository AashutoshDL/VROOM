const mongoose=require('mongoose')

const DriverSchema=new mongoose.Schema({
    userName:String,
    licenseNumber:Number,
    phoneNumber:Number,
    address: String,
    status:String,
})

const DriverModel=mongoose.model("drivers",DriverSchema)
module.exports=DriverModel