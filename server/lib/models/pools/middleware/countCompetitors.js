const { exception } = require('q3-core-responder');
const { size } = require('lodash');

const greaterThanZero = (v) => {
  const num = Number(v);
  return Number.isNaN(num) ? false : num > 0;
};

module.exports = function countCompetitors() {
  const { competitors, maximumCompetitors } = this;

  if (
    greaterThanZero(maximumCompetitors) &&
    size(competitors) > maximumCompetitors
  )
    exception('Validation').msg('001').throw();
};
