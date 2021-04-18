const mongoose = require('mongoose');
const Exercise = require('./exercise');

const Event = new mongoose.Schema({
  duration: Number,
  exercises: [Exercise],
  equipment: String,
  url: mongoose.Schema.Types.Url,
});

module.exports = Event;
