const mongoose = require('mongoose');

const Competitor = new mongoose.Schema({
  handle: {
    type: String,
    required: true,
    distinct: true,
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

module.exports = Competitor;
