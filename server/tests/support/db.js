// eslint-disable-next-line
const supertest = require('supertest');
const mongoose = require('mongoose');
const {
  handleUncaughtExceptions,
} = require('q3-core-responder');
const { $app: app } = require('../../lib/config');

exports.connect = async () => {
  app.use(handleUncaughtExceptions);
  await mongoose.connect(process.env.CONNECTION);
  return supertest(app);
};

exports.destroy = async () => {
  await Promise.all(
    Object.values(mongoose.models).map((model) =>
      model.deleteMany({}),
    ),
  );

  return mongoose.disconnect();
};
