const mongoose = require('mongoose');

const Competitor = new mongoose.Schema({
  handle: {
    type: String,
    required: true,
    distinct: true,
  },
  weeks: [
    {
      duration: {
        type: Number,
      },
      hasProofOfPoints: {
        type: Boolean,
        default: false,
      },
      url: {
        type: mongoose.Schema.Types.Url,
      },
      bonusPoints: {
        type: Number,
        default: 0,
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
