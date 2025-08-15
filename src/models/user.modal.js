import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true,
    match:[/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address"]
},
phone:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true,
}
})

export const User = mongoose.model("User", userSchema)