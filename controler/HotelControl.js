const Hotels = require("../models/Hotels");

module.exports = createHotelcontrol = async(req, res, next)=>{
   
    try {
        const createHotel = new Hotels(req.body);
        const hotelData = await createHotel.save();
        console.log(hotelData);
        res.send(hotelData); 
    } catch (error) {
        next(error)
    }
}
module.exports = updateHotelcontrol = async(req, res, next)=>{
    try {
        const hotelUpdate = await Hotels.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        console.log(hotelUpdate);
        res.send(hotelUpdate); 
    } catch (error) {
        next(error)
    }
}
module.exports = deleteHotelcontrol =  async(req, res, next)=>{
    try {
        await Hotels.findByIdAndDelete(req.params.id)
        console.log("hotel has been deleted");
        res.send("hotel has been deleted"); 
    } catch (error) {
        next(error)
    }
}
module.exports = getByIdHotelcontrol = async(req, res, next)=>{
    try {
        const hotel = await Hotels.findById(req.params.id)
        console.log(hotel);
        res.send(hotel); 
    } catch (error) {
        next(error)
    }
}
module.exports = getAllHotelcontrol =  async(req, res, next)=>{
    try {
        const hotels = await Hotels.find()
        console.log(hotels);
        res.send(hotels); 
    } catch (error) {
       next(error)
    }
}
 