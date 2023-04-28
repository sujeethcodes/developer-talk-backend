const handler = require("express-async-handler");
const helperUtils = require("../utils/helper.Utils");
const User = require("../model/user.Schema");

const controller = {};

controller.userSingUp = handler(async (req, res) => {
  const signUp = await User.create({
    userId: helperUtils.getRandomUserId(),
    name: req?.body?.name,
    email: req?.body?.email,
    password: req?.body?.password,
    phoneNumber: req?.body?.phoneNumber,
  });
  res.json({ message: "USER_CREATED_SUCCESSFULLY" });
});

controller.userSignin = handler(async (req, res) => {
  const signIn = await User.findOne({
    email: req?.body?.email,
    password: req?.body?.password,
  });
  !signIn
    ? res.json({ message: "LOGIN FAILED" })
    : res.json({ message: "LOGIN SUCCESSFULLY", userSignin: signIn });
});

module.exports = controller;
