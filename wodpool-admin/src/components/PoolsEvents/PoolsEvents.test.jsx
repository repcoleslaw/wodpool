import { getDynamicWeeklyValues } from './PoolsEvents';

test.each([
  [{}, { sizeOfExercises: 0, week: 'Week #1' }],
  [
    { exercises: Array.from({ length: 10 }) },
    { sizeOfExercises: 10, week: 'Week #1' },
  ],
])('.getDynamicWeeklyValues(%o)', (event, expected) => {
  expect(
    getDynamicWeeklyValues({ events: [event] })[0],
  ).toMatchObject(expected);
});
