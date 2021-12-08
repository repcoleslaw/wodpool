const Q3 = require('q3-api');
const { get } = require('lodash');
const { check, compose } = require('q3-core-composer');

const checkUserType = ({ user }, res, next) =>
  get(user, '__t') !== 'competitors'
    ? res.status(403).send()
    : next();

const Controller = async (
  { query: { pool }, user, t },
  res,
) => {
  const doc = await Q3.model('pools').findStrictly(pool);
  doc.competitors.push({
    handle: user.handle,
  });

  await doc.save();

  res.ok({
    message: t('messages:S001'),
  });
};

Controller.authorization = [checkUserType];
Controller.validation = [check('pool').isMongoId()];

module.exports = compose(Controller);
