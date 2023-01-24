const jwt = require("jsonwebtoken");
const createError = require("./error");


module.exports = verifyToken =async (req, res, next)=>{
    const token = await req.cookies.jwt;
    console.log(`token at Verify is:: ${token}`)
    if(!token){ 
        return next(createError(401, "you are not authenticated"))
   }
   await jwt.verify(token, process.env.JWT, (err, user)=>{
       if(err) return next(createError(404, "Token is not valid"))
       req.user = user
       next()
       console.log(`token at valid very is:: ${token}`);
   })
}

//  verify user

module.exports = verifyUser =(req, res, next)=>{
verifyToken(req, res, next, ()=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        next()
    }else{
        if(err) return next(createError(404, "Token is not autherazid")) 
    }
})
}

//  verify admin

module.exports = verifyAdmin =(req, res, next)=>{
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(404, "Token is not autherazid")) 
        }
    })
    }