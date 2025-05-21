const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createRestuarantController } = require("../controllers/restaurantController");

const router = express.Router();

// routes
// CREATE RESTAURANT
router.post("/create", authMiddleware, createRestuarantController)

module.exports = router;