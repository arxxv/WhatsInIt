const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const foodController = require("../controllers/food");

router.post("/", authController.authMiddleware, foodController.check);

module.exports = router;
