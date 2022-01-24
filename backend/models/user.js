const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id:String,
    name: String,
    items: [String],
    address: String,
    pincode: String
})

const User= mongoose.model("users",userSchema)

module.exports=User