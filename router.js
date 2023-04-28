const express = require("express");
const router = express.Router();

// ROUTES
const userRouter = require("./routes/user.routes");
const languageRouter = require("./routes/language.routes");
const talkRoute = require("./routes/talk.routes");

// USER ROUTES
router.use("/users", userRouter);
router.use("/proLanguage", languageRouter);
router.use("/talkRoute", talkRoute);

module.exports = router;
