const Mailer = require('q3-core-mailer');
const { getClientUrl } = require('./utils');

module.exports = async (user) => {
  const m = await Mailer('en-password-reset').to([
    user.email,
  ]);

  await m.fromDatabase({
    name: user.firstName,
    url: getClientUrl(user),
    ...user,
  });

  return m.send();
};
