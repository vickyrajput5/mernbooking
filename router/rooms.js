const express = require("express");
require("../controler/roomControl")
const createError = require("../untils/error")
require("../untils/verifyToken")
const router = express.Router();

// create data
router.post("/:hotelId",verifyAdmin, createRooms)

// update hotel
router.put("/:id",verifyAdmin, updateRoomscontrol)
// Delete Hotel
router.delete("/:id/:hotelId",verifyAdmin, deleteRoomcontrol)
// Get Hotel by id
router.get("/:id", getByIdRoomcontrol)
// Get All Hotel
router.get("/", getAllRoomcontrol)


module.exports = router