const mongoose = require('mongoose');
const Exercise = require('./exercise');

module.exports = new mongoose.Schema({
  duration: Number,
  exercises: [Exercise],
  equipment: String,
  url: mongoose.Schema.Types.Url,
});
