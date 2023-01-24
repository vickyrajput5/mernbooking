const express = require("express");
require("../untils/verifyToken");
require("../controler/userControl")
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("Your Logged in")
// })

// // check user and del

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user you are login and delete your account")
// })

// // check Admin and del

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello Admin you are login and delete All account")
// })

// update user
router.put("/:id", verifyUser, updateusercontrol)
console.log(updateusercontrol);
// Delete user
router.delete("/:id", verifyUser, deleteusercontrol)
// Get user by id
router.get("/:id", verifyUser, getByIdusercontrol)
// Get All Hotel
router.get("/", verifyAdmin, getAllusercontrol)

module.exports = router