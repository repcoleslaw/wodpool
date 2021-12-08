import {
  COMPETITOR,
  assignDiscriminator,
} from './UsersAdd';

test.each([
  ['Administrator', undefined],
  [COMPETITOR, 'competitors'],
])('.getDynamicWeeklyValues(%s)', (role, expected) => {
  expect(assignDiscriminator(null, { role })).toBe(
    expected,
  );
});
