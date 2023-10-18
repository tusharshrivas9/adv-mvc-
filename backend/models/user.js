const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   firstname:{
    type:String,
    required:true
   },
   Lastname:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   role:{
    type:String,
    enum:["admin","student","techer"],
    default:"student"
   }

},{
    timestamps:true
})

const User = mongoose.modal("User",userSchema)