const moment = require('moment');
const { size } = require('lodash');

module.exports = function () {
  const today = moment();
  const diff = moment
    .duration(today.diff(moment(this.startsOn)))
    .asWeeks();

  const l = size(this.events);
  return Math.floor(diff <= l ? diff : -1);
};
