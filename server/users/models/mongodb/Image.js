const mongoose = require("mongoose");
const { URL, DEFAULT_VALIDATION } = require("../../helpers/MongooseValidators");

const Image = new mongoose.Schema({
  url: URL,
  alt: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
});

module.exports = Image;
