const Q3 = require('q3-api');

exports.genPool = (args) =>
  Q3.model('pools').create({
    name: 'Test',
    description: 'For testing purposes',
    price: 0,
    maximumNumberOfCompetitors: 2,
    numberOfWeeks: 4,
    startsOn: new Date(),
    events: [
      {
        duration: 10,
        equipment: 'Body weight',
        exercises: [
          {
            name: 'Burpes',
            description: 'Push and jump',
            reps: 100,
          },
        ],
      },
      {
        duration: 10,
        equipment: 'Ropes',
        exercises: [
          {
            name: 'Shake',
            description: 'Two-arm shake',
            reps: 100,
          },
        ],
      },
    ],
    ...args,
  });
