const express = require("express");
const { getUserController, updateUserController, updateUserPasswordController, resetPasswordController } = require("../controllers/userController");
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

module.exports = router;
