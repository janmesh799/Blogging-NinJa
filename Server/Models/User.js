const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Interest:{
    type:Array,
  }
});
const User = mongoose.model("user", UserSchema);

module.exports = User;
