/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
module.exports = mongoose.model("User", userSchema);
