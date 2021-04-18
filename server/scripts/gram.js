/* eslint-disable no-console */
const Q3 = require('q3-api');
const cluster = require('cluster');
const { last } = require('lodash');
const config = require('../lib/config');

(async () => {
  await config.connect();
  if (!cluster.isMaster) return;

  try {
    const mod = Q3.model(last(process.argv));
    console.log('Initializing');
    await mod.createTextIndex();
    console.log('Seeding');
    await mod.initializeFuzzySearching({
      active: true,
    });

    console.log('Finished');
  } catch (e) {
    console.log(e);
  }
})();
