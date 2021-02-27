const config = require('./config');

config.connect().catch(() => {
  // noop
});
