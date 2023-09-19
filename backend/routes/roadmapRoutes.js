const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getAllRoadmap } = require("../controllers/feedbackController");

router.route("/").get(protect, getAllRoadmap);

module.exports = router;
