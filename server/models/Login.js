const mongoose=require('mongoose')

const LoginSchema=new mongoose.Schema({
    name:String,
    phoneNumber:Number,
    age: Number,
    address: String,
    accountType:String,
<<<<<<< HEAD
    password:String
=======
    password:String,
    confirmPassword:String
>>>>>>> 861b31e74e50e796eec32973c6c1678e7fa1dc95
})

const LoginModel=mongoose.model("login",LoginSchema)
module.exports=LoginModel