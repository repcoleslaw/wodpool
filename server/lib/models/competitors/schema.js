const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  bio: {
    type: String,
  },
  handle: {
    type: String,
    dedupe: true,
    gram: true,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  allowExtraEmails: {
    type: Boolean,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
  },
});
