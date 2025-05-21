const express = require("express");
const {
  getUserController,
  updateUserController,
  updateUserPasswordController,
  resetPasswordController,
  deleteUserController,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// routes
// GetUsers || Get
router.get("/getUsers", authMiddleware, getUserController);

// update profile
router.put("/updateUser", authMiddleware, updateUserController);

// Password update
router.post("/updatePassword", authMiddleware, updateUserPasswordController);
router.post("/resetPassword", authMiddleware, resetPasswordController);

// delete user
router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

module.exports = router;
