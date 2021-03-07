const mongoose = require('mongoose');
const Competitor = require('./competitor');
const Exercise = require('./exercise');
const countCompetitors = require('../middleware/countCompetitors');

const Schema = new mongoose.Schema(
  {
    competitors: [Competitor],
    description: {
      type: String,
      required: true,
      gram: true,
    },
    exercises: [Exercise],
    maximumCompetitors: {
      type: Number,
    },
    name: {
      dedupe: true,
      type: String,
      required: true,
      gram: true,
    },
    numberOfWeeks: {
      type: Number,
      default: 4,
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
