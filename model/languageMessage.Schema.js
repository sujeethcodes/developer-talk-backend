const mongoose = require("mongoose");
const User = require("../model/user.Schema");
const Users = require("../model/user.Schema");
const talks = new mongoose.Schema(
  {
    senderId: {
      type: String,
    },

    message: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "talks",
  }
);

const languageTalk = mongoose.model("talks", talks);
module.exports = languageTalk;
