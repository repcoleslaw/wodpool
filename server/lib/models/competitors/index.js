const { Users } = require('q3-api');
const Schema = require('./schema');
require('./middleware');

module.exports = Users.discriminator('competitors', Schema);
