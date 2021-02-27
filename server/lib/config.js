const Q3 = require('q3-api');
require('dotenv').config();

module.exports = Q3.config({
  enableServerToServer: false,
  location: __dirname,
});
