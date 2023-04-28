const express = require("express");
const router = express.Router();
const languageController = require("../controller/language.controller");
router.post("/language", languageController.proLanguage);
router.post("/findLanguage", languageController.findLanguage);
router.post("/findAllLanguage", languageController.findAllLanguage);

module.exports = router;
