const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/auth");
const userController = require("../controllers/users");

router.get("/", authController.authMiddleware, userController.getUser);

router.put(
  "/",
  [body("allergies", "").isArray({ min: 0, max: 0 })],
  authController.authMiddleware,
  userController.updateUser
);

module.exports = router;
