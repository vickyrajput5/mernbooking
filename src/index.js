const express = require("express")
require("../db/config")
const authRouter = require("../router/auth")
const usersRouter = require("../router/users")
const roomsRouter = require("../router/rooms")
const hotelsRouter = require("../router/hotels")
const cors = require("cors")
const app = express()
var cookieParser = require('cookie-parser')
const Port = process.env.PORT || 4000

// middlewear

app.use((req,res,next)=>{
    next()
})

app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/hotel", hotelsRouter)
app.use("/user", usersRouter)
app.use("/room", roomsRouter)
// error handling middlewear

app.use((err,req,res,next)=>{

    const errorState = err.status || 500;
    const errorMessage = err.message || "Something Wronge"
   return res.status(errorState).json({
       success:false,
       status:errorState,
       message:errorMessage,
       stack: err.stack
   })
})


app.listen(Port, ()=>{
    console.log(`Server Listing Port is ${Port}`);
})

