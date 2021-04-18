const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: Number,
  reps: Number,
});
