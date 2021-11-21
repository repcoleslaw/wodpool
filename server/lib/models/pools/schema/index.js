const mongoose = require('mongoose');
const Competitor = require('./competitor');
const Event = require('./events');
const calculatePoints = require('../middleware/calculatePoints');
const calculateEndDate = require('../middleware/calculateEndDate');
const countCompetitors = require('../middleware/countCompetitors');
const convertQueryShorthand = require('../middleware/convertQueryShorthand');
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
    type: {
      type: String,
      enum: ['Cycles', 'Minutes'],
      default: 'Minutes',
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
Schema.pre('save', calculatePoints);
Schema.pre('find', convertQueryShorthand);
Schema.pre('countDocuments', convertQueryShorthand);

Schema.virtual('currentWeek').get(currentWeek);

module.exports = Schema;
