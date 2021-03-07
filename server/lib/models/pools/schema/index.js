const mongoose = require('mongoose');
const Competitor = require('./competitor');
const Event = require('./events');
const countCompetitors = require('../middleware/countCompetitors');

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
    startsOn: {
      type: Date,
      required: true,
    },
  },
  {
    restify: '*',
    collectionPluralName: 'pools',
    collectionSingularName: 'pool',
  },
);

Schema.pre('save', countCompetitors);
module.exports = Schema;
