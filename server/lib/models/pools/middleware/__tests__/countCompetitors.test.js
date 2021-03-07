const countCompetitors = require('../countCompetitors');

const execMiddlewareFn = (
  maximumCompetitors,
  length,
) => () =>
  countCompetitors.call({
    maximumCompetitors,
    competitors: Array.from({
      length,
    }),
  });

describe('countCompetitors', () => {
  it('should throw a validation error', () =>
    expect(execMiddlewareFn(3, 4)).toThrowError('001'));

  it('should not throw a validation error if size is less than max', () =>
    expect(execMiddlewareFn(3, 2)).not.toThrowError());

  it('should consider 0 as infinite', () =>
    expect(execMiddlewareFn(0, 100)).not.toThrowError());
});
