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

Competitor.virtual('pointsToDate').get(function () {
  if (!Array.isArray(this.weeks)) return 0;

  return this.weeks.reduce((acc, curr) => {
    const num = Number(curr.points);
    if (Number.isNaN(num)) return null;
    return acc + num;
  }, 0);
});

module.exports = Competitor;
