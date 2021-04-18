const Mailer = require('q3-core-mailer');

module.exports = async (user) =>
  Mailer('en-password-reset')
    .to([user.email])
    .subjecti18n('passwordReset')
    .mjml({
      name: user.firstName,
      url: process.env.WEB_APP,
      ...user,
    })
    .send();
