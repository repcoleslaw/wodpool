const moment = require('moment');
const calculateEndDate = require('../calculateEndDate');

describe('calculateEndDate', () => {
  it('should add weeks to start date', () => {
    const context = {
      startsOn: moment().toISOString(),
      events: [1, 2, 3],
    };

    calculateEndDate.call(context);

    expect(
      moment
        .duration(
          moment(context.endsOn).diff(context.startsOn),
        )
        .asWeeks(),
    ).toBeCloseTo(3);
  });
});
