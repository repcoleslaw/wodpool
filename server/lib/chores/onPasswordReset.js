const Mailer = require('q3-core-mailer');
const { getClientUrl } = require('./utils');

module.exports = async (user) =>
  Mailer('en-password-reset')
    .to([user.email])
    .subjecti18n('passwordReset')
    .mjml({
      name: user.firstName,
      url: getClientUrl(user),
      ...user,
    })
    .send();
