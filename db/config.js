const mongoose = require("mongoose")
require('dotenv').config();
mongoose.connect(process.env.Local_Host).then(()=>{
    console.log("Connection is Successfull");
}).catch(()=>{
    console.log("No Connection");
})