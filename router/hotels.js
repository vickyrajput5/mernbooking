const express = require("express");
const router = express.Router();
require("../controler/HotelControl")
const createError = require("../untils/error")
require("../untils/verifyToken")
// create data
router.post("/",verifyAdmin, createHotelcontrol)

// update hotel
router.put("/:id",verifyAdmin, updateHotelcontrol)
// Delete Hotel
router.delete("/:id",verifyAdmin, deleteHotelcontrol)
// Get Hotel by id
router.get("/find/:id", getByIdHotelcontrol)
// Get All Hotel
router.get("/", getAllHotelcontrol)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRoom)
module.exports = router