const Mailer = require('q3-core-mailer');

module.exports = async (user) =>
  Mailer('en-verify')
    .to([user.email])
    .subjecti18n('verify')
    .mjml({
      name: user.firstName,
      url: process.env.WEB_APP,
      code: user.secret,
      id: user.id,
    })
    .send();
