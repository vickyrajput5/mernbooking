const Rooms = require("../models/Rooms");
const Hotels = require("../models/Hotels");
require("../untils/error")


module.exports = createRooms = async(req, res, next)=>{

    const hotelId = req.params.hotelId;
    
    try {
        const newRooms = new Rooms(req.body);
        const saveRooms = await newRooms.save();
        try {
            await Hotels.findByIdAndUpdate(hotelId, {$push: {rooms: saveRooms._id},});
        } catch (error) {
            next(error)
        }
        res.status(200).json(saveRooms);
    } catch (error) {
        next(error)
    }
}
module.exports = updateRoomscontrol = async(req, res, next)=>{
    try {
        const roomsUpdate = await Rooms.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        console.log(roomsUpdate);
        res.send(roomsUpdate); 
    } catch (error) {
        next(error)
    }
}
module.exports = deleteRoomcontrol =  async(req, res, next)=>{
    const hotelId = req.params.hotelId;
    try {
        await Rooms.findByIdAndDelete(req.params.id)
        try {
            await Hotels.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id},});
        } catch (error) {
            next(error)
        }
        console.log("Room has been deleted");
        res.send("Room has been deleted"); 
    } catch (error) {
        next(error)
    }
}
module.exports = getByIdRoomcontrol = async(req, res, next)=>{
    try {
        const room = await Rooms.findById(req.params.id)
        console.log(room);
        res.send(room); 
    } catch (error) {
        next(error)
    }
}
module.exports = getAllRoomcontrol =  async(req, res, next)=>{
    try {
        const rooms = await Rooms.find()
        console.log(rooms);
        res.send(rooms); 
    } catch (error) {
       next(error)
    }
}
 