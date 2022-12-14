/** @format */

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAtPost: { type: String },
  // each comment can only relates to one blog, so it's not in array
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
});
mongoose.models = {};

module.exports = mongoose.model("Comment", commentSchema);
