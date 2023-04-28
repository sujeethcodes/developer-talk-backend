const handler = require("express-async-handler");
const Language = require("../model/language.Schema");
const controller = {};

controller.proLanguage = handler(async (req, res) => {
  const proLanguage = await Language.create({
    language: req?.body?.language,
    categories: req?.body?.categories,
  });
  res.json({ message: "INSERT SUCCESSFULLY", proLanguage: proLanguage });
});
controller.findLanguage = handler(async (req, res) => {
  const findLanguage = await Language.find({
    language: req?.body?.language,
  });
  res.json(
    findLanguage.map((each) => ({
      language: each.language,
      categories: each.categories,
    })) ?? []
  );
});

controller.findAllLanguage = handler(async (req, res) => {
  const findAllLanguage = await Language.find();
  res.json(
    findAllLanguage.map((each) => ({
      languageImg: each.languageImg,
      language: each.language,
      categories: each.categories,
    })) ?? []
  );
});
module.exports = controller;
