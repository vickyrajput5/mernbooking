const express = require("express");
const router = express.Router();
require("../controler/HotelControl")
const createError = require("../untils/error")
// create data
router.post("/", createHotelcontrol)

// update hotel
router.put("/:id", updateHotelcontrol)
// Delete Hotel
router.delete("/:id", deleteHotelcontrol)
// Get Hotel by id
router.get("/:id", getByIdHotelcontrol)
// Get All Hotel
router.get("/", getAllHotelcontrol)
module.exports = router