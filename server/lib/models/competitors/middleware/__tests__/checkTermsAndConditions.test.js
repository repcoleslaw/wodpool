const {
  checkTermsAndConditions,
} = require('../checkTermsAndConditions');

describe('castToBoolean', () => {
  it('should error', () => {
    expect(() =>
      checkTermsAndConditions.call({
        isNew: true,
        termsAccepted: false,
      }),
    ).toThrowError('C001');
  });

  it('should not error', () => {
    expect(() =>
      checkTermsAndConditions.call({
        isNew: false,
        termsAccepted: false,
      }),
    ).not.toThrowError();
  });
});
