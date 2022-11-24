const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  First_Name: {
    type: String,
  },
  Last_Name: {
    type: String,
  },
  Location: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Admin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("Userdata", UserSchema);
module.exports = User;
