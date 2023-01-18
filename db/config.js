const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect("mongodb+srv://waqar51:4090475Wsdb@booking.n3bdjtu.mongodb.net/HotelBocking").then(()=>{
    console.log("Connection is Successfull");
}).catch(()=>{
    console.log("No Connection");
})