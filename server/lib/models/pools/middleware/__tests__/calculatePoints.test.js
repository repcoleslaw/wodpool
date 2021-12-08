const mongoose = require('mongoose');
const calculatePoints = require('../calculatePoints');

test('calculatePoints should award points', () => {
  const makeCompetitorEntry = (duration) => ({
    handle: 'competitor',
    weeks: [
      {
        createdAt: new Date().toISOString(),
        _id: mongoose.Types.ObjectId(),
        week: 1,
        duration,
      },
    ],
  });

  const context = {
    startsOn: new Date(),
    competitors: [
      19, 15, 45, 19, 9, 44, 12, 12, 33, 100,
    ].map(makeCompetitorEntry),
  };

  calculatePoints.call(context);

  // also based on who submitted first
  [3, 5, 1, 3, 50, 1, 25, 15, 1].forEach(
    (expectedPoints, competitorIndex) => {
      expect(
        context.competitors[competitorIndex].weeks[0]
          .points,
      ).toBe(expectedPoints);
    },
  );
});
