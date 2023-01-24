const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    roomNumber:[{number:Number, unavailaleDate:{type:[Date]}}]
}, {
    timestamps:true
})


module.exports = Rooms = new mongoose.model("Rooms", roomSchema);
