const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    reuired: true,
  },
  lname: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    reuired: true,
  },
  phone: {
    type: Number,
    reuired: true,
  },
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
