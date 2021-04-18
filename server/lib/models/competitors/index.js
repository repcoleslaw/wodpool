const { Users } = require('q3-api');
const Schema = require('./schema');

module.exports = Users.discriminator('competitors', Schema);
