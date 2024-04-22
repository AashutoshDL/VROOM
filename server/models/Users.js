const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    phoneNumber:Number,
    age: Number,
    address: String,
    accountType:String
})

const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel