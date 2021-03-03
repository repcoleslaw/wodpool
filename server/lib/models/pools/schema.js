const mongoose = require('mongoose');

module.exports = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      gram: true,
    },
    description: {
      type: String,
      required: true,
      gram: true,
    },
    maximumCompetitors: {
      type: Number,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    restify: '*',
    collectionPluralName: 'pools',
    collectionSingularName: 'pool',
  },
);
