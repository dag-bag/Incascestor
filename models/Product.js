/** @format */

"use strict";
var mongoose = require("mongoose");
var { Schema } = mongoose;
let variantSchema = new Schema({
  img: {
    type: [String],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableQty: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
});
let productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },

  variant: {
    type: [variantSchema],
  },
  category: {
    type: String,
    required: true,
  },

  tag: {
    type: String,
    default: "General",
  },
});
mongoose.models = {};
export default mongoose.model("Product", productSchema);
