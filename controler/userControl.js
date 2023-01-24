const User = require("../models/User");

module.exports = updateusercontrol = async(req, res, next)=>{
    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        console.log(userUpdate);
        res.send(userUpdate); 
    } catch (error) {
        next(error)
    }
}
module.exports = deleteusercontrol =  async(req, res, next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        console.log("user has been deleted");
        res.send("user has been deleted"); 
    } catch (error) {
        next(error)
    }
}
module.exports = getByIdusercontrol = async(req, res, next)=>{
    try {
        const user = await User.findById(req.params.id)
        console.log(user);
        res.send(user); 
    } catch (error) {
        next(error)
    }
}
module.exports = getAllusercontrol =  async(req, res, next)=>{
    try {
        const user = await User.find()
        console.log(user);
        res.send(user); 
    } catch (error) {
       next(error)
    }
}
 