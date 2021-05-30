const Q3 = require('q3-api');
const { exception } = require('q3-core-responder');
const { get, find } = require('lodash');
const { check, compose } = require('q3-core-composer');
const moment = require('moment');

const checkUserType = ({ user }, res, next) =>
  get(user, '__t') !== 'competitors'
    ? res.status(403).send()
    : next();

const getDistantFromStartTime = (xs) =>
  Math.floor(moment.duration(moment().diff(xs)).asWeeks()) +
  1;

const findCompetitorByHandle = (xs, handle) =>
  find(xs.competitors, (item) => item.handle === handle);

const doesWeekExist = (xs, week) =>
  find(xs.weeks, (item) => item.week === week);

const Controller = async (
  { body: { id, duration, hasProofOfPoints, url }, user },
  res,
) => {
  const doc = await Q3.model('pools').findStrictly(id);
  const competitor = findCompetitorByHandle(
    doc,
    user.handle,
  );

  if (!competitor)
    exception('BadRequest').msg('002').throw();

  const week = getDistantFromStartTime(doc.startsOn);

  if (doesWeekExist(competitor, week))
    exception('BadRequest').msg('003').throw();

  competitor.weeks.push({
    week,
    duration,
    hasProofOfPoints,
    url,
  });

  await doc.save();
  res.acknowledge();
};

Controller.authorization = [checkUserType];

Controller.validation = [
  check('id').isMongoId(),
  check('duration').isNumeric(),
  check('hasProofOfPoints').isBoolean(),
  check('url').isURL(),
];

module.exports = compose(Controller);
