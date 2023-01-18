const express = require("express")
require("../db/config")
const authRouter = require("../router/auth")
const usersRouter = require("../router/users")
const roomsRouter = require("../router/rooms")
const hotelsRouter = require("../router/hotels")
const app = express()
var cookieParser = require('cookie-parser')
const Port = process.env.PORT || 4000

// middlewear

app.use((req,res,next)=>{
    console.log("Hi im MiddleWear")
    next()
})

app.use(cookieParser())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/hotel", hotelsRouter)
app.use("/user", usersRouter)
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

