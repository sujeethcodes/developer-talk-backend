const controller = {};
const handler = require("express-async-handler");
const Talk = require("../model/languageMessage.Schema");

controller.getAllTalk = handler(async (req, res) => {
  const talk = await Talk.find().limit(10);

  return res.json(talk);
});

module.exports = controller;
