const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  handle: {
    type: String,
    required: true,
  },
  weeks: [
    {
      hasProofOfPoints: {
        type: Boolean,
        default: false,
      },
      points: {
        type: Number,
        default: 0,
      },
      week: {
        type: Number,
        default: 1,
      },
    },
  ],
});
