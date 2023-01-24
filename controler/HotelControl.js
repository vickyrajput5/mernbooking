const Hotels = require("../models/Hotels");
const Rooms = require("../models/Rooms");
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
    const {min, max , ...others} = req.query
    try {
        const hotels = await Hotels.find({...others, cheapPrice:{$gt:min | 1, $lt:max || 999}}).limit(req.query.limit);
        console.log(hotels);
        res.send(hotels); 
    } catch (error) {
       next(error)
    }
}
module.exports = countByCity =  async(req, res, next)=>{
    const cities = req.query.cities.split(",");
    try {
       const list = await Promise.all(cities.map(city=>{
           return Hotels.countDocuments({city:city})
       }))
        res.status(200).json(list); 
    } catch (error) {
       next(error)
    }
}
module.exports = countByType =  async(req, res, next)=>{
    try {
       const hotelCount = await Hotels.countDocuments({type: "hotel"})
       const apartmentsCount = await Hotels.countDocuments({type: "apartments"})
       const resortsCount = await Hotels.countDocuments({type: "resorts"})
       const villasCount = await Hotels.countDocuments({type: "villas"})
       const cabinsCount = await Hotels.countDocuments({type: "cabins"})

       res.status(200).json([
        {type: "hotel", count: hotelCount},
        {type: "apartments", count: apartmentsCount},
        {type: "resorts", count: resortsCount},
        {type: "villas", count: villasCount},
        {type: "cabins", count: cabinsCount}   
       ])
    } catch (error) {
       next(error)
    }
}
 
module.exports = getHotelRoom = async(req, res, next)=>{
    try {
        const hotel = await Hotels.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Rooms.findById(room)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}