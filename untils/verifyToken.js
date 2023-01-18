const jwt = require("jsonwebtoken");
const createError = require("./error");


module.exports = verifyToken =async (req, res, next)=>{
    const token = await req.cookies.jwt;
    if(!token){ 
        return next(createError(401, "you are not authenticated"))
   }
   await jwt.verify(token, process.env.JWT, (err, user)=>{
       if(!err) return next(createError(404, "Token is not valid"))
       req.user = user
       next()
   })
}