const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createRestuarantController,
  getAllRestaurantsController,
  getRestaurantyIdController,
  deleteUserController,
} = require("../controllers/restaurantController");

const router = express.Router();

// routes
// CREATE RESTAURANT
router.post("/create", authMiddleware, createRestuarantController);

// GET ALL RESTAURANTS
router.get("/getAll", authMiddleware, getAllRestaurantsController);

// GET RESTAURANT BY id
router.get("/get/:id", authMiddleware, getRestaurantyIdController);

// DELETE RESTAURANT || DELETE
router.delete("/delete/:id", authMiddleware, deleteUserController);

module.exports = router;
