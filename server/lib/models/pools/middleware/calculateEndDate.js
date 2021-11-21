const { size } = require('lodash');
const moment = require('moment');

module.exports = function calculateEndDate() {
  this.endsOn = moment(this.startsOn)
    .add(size(this.events), 'weeks')
    .toISOString();
};
