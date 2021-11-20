const Mailer = require('q3-core-mailer');
const { getClientUrl } = require('./utils');

module.exports = async (user) => {
  console.log(user);
  return Mailer('en-verify')
    .to([user.email])
    .subjecti18n('verify')
    .mjml({
      name: user.firstName,
      url: getClientUrl(user),
      code: user.secret,
      id: user.id,
    })
    .send();
};
