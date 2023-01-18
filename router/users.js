const express = require("express");
const verifyToken = require("../untils/verifyToken");
require("../controler/userControl")
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("Your Logged in")
    next()
})

// update user
router.put("/:id", updateusercontrol)
console.log(updateusercontrol);
// Delete user
router.delete("/:id", deleteusercontrol)
// Get user by id
router.get("/:id", getByIdusercontrol)
// Get All Hotel
router.get("/", getAllusercontrol)

module.exports = router