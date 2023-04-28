const mongoose = require("mongoose");

const user = new mongoose.Schema({
  userId: {
    type: Number,
  },
  name: {
    type: String,
  },
  profile: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});
const User = mongoose.model("user", user);
module.exports = User;
