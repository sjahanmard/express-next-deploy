const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    trim: true,
    //cuts off whitespaces
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  senderPicture: {
    trim: true,
    type: String,
    required: true,
  },
  picture: {
    trim: true,
    type: String,
    required: true,
  },
  date: {
    trim: true,
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
