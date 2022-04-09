const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const fileController = require("../controllers/file");

router.post("/", authController.authMiddleware, fileController.upload);

module.exports = router;
