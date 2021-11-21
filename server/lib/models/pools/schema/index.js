const mongoose = require('mongoose');
const Competitor = require('./competitor');
const Event = require('./events');
const calculateEndDate = require('../middleware/calculateEndDate');
const countCompetitors = require('../middleware/countCompetitors');
const currentWeek = require('./currentWeek');

const Schema = new mongoose.Schema(
  {
    competitors: [Competitor],
    description: {
      type: String,
      required: true,
      gram: true,
    },
    events: [Event],
    maximumCompetitors: {
      type: Number,
    },
    name: {
      dedupe: true,
      type: String,
      required: true,
      gram: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    startsOn: {
      type: Date,
      required: true,
    },
    endsOn: {
      type: Date,
    },
  },
  {
    restify: '*',
    collectionPluralName: 'pools',
    collectionSingularName: 'pool',
  },
);

Schema.pre('save', countCompetitors);
Schema.pre('save', calculateEndDate);

Schema.virtual('currentWeek').get(currentWeek);

module.exports = Schema;
