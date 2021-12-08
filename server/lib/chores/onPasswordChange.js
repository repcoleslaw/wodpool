const Mailer = require('q3-core-mailer');

module.exports = async (user) => {
  const m = await Mailer('en-password-change').to([
    user.email,
  ]);

  await m.fromDatabase({
    name: user.firstName,
  });

  return m.send();
};
