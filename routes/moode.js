const express = require("express")
const router = express.Router();
const moodController = require("../controllers/moodController")
router.get("/moods", moodController.getMoods)

router.get("/moods/:letter",moodController.filterMoods)
module.exports = router;