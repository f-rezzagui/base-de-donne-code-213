const express = require("express")

const router = express.Router();
const userController = require("../controllers/userController")
router.get("/profile", userController.getUser)
router.get("/alluser", userController.getAllUser)
module.exports = router;