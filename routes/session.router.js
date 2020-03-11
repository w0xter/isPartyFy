const express = require("express");
const router = express.Router();
const sessionController = require('../controllers/session.controller')
router.get("/", sessionController.hello)
router.get("/create", sessionController.createSession)
module.exports = router
