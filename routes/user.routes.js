const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");
router.post("/register", userController.userSingUp);
router.post("/signIn", userController.userSignin);

module.exports = router;
