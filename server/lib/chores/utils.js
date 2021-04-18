exports.getClientUrl = ({ role }) =>
  role === 'Administrator'
    ? process.env.WEB_ADMIN
    : process.env.WEB_CLIENT;
