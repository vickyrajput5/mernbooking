const express = require("express");
require('../controler/authControl')
const router = express.Router();


router.post("/register", register)
router.post("/login", login)


module.exports = router