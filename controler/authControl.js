const User = require("../models/User")
const bcrypt = require("bcryptjs");
const createError = require("../untils/error");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = register = async(req, res, next)=>{
    const hash = await bcrypt.hash(req.body.password, 10)
try {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })
    const saveUser = await newUser.save();
    res.status(200).send(saveUser)
} catch (error) {
    next(error)
    console.log(error)
}
}
module.exports = login = async(req, res, next)=>{
try {
    const user = await  User.findOne({username:req.body.username})

  if(!user) return next(createError(404, "User Not found"))
  const matchPassword = await bcrypt.compare(req.body.password, user.password);
  if(!matchPassword) return next(createError(404, "Wronge password and Username"))

  const token = await jwt.sign({id:this._id , isAdmin:this.isAdmin}, process.env.JWT)
  console.log(`this is token: ${token}`);
    res.cookie("jwt", token, {
        // expires: new Date(Date.now() + 100000),
        httpOnly:true
    }).status(200).json(user)

} catch (error) {
    next(error)
}
}
