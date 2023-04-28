const express = require("express");
const router = express.Router();

const talkController = require("../controller/talk.controller");

router.post("/getAllTalk", talkController.getAllTalk);

module.exports = router;
