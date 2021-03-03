const Q3 = require('q3-api');
const Schema = require('./schema');

module.exports = Q3.setModel('pools', Schema);
