const { getClientUrl } = require('../utils');

test.each([
  ['Administrator', 'admin.com'],
  ['Competitor', 'client.com'],
])('.getClientUrl(%s)', (role, expected) => {
  process.env.WEB_ADMIN = 'admin.com';
  process.env.WEB_CLIENT = 'client.com';

  expect(
    getClientUrl({
      role,
    }),
  ).toBe(expected);
});
