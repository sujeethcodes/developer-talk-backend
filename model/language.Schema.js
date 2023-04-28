const mongoose = require("mongoose");

const language = new mongoose.Schema({
  languageImg: {
    type: String,
  },
  language: {
    type: String,
  },
  categories: {
    type: Array,
  },
});

const Language = mongoose.model("language", language);
module.exports = Language;
