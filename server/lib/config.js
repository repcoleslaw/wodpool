const Q3 = require('q3-api');

require('dotenv').config();
require('./models');

module.exports = Q3.config({
  enableServerToServer: false,
  location: __dirname,
});
