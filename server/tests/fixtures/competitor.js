const Q3 = require('q3-api');

exports.authorize = async (user) => {
  const key = await user.generateApiKey();
  return `Apikey ${key}`;
};

exports.genCompetitor = (args) =>
  Q3.model('q3-api-users').create({
    firstName: 'Jon',
    lastName: 'Do',
    email: 'jon.do@cyber.net',
    handle: 'ironman',
    lang: 'en-CA',
    role: 'Competitor',
    __t: 'competitors',
    verified: true,
    active: true,
    secret: 'SHH',
    termsAccepted: true,
    ...args,
  });
