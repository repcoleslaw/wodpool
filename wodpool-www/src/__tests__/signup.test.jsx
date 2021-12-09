import React from 'react';
import { Builders } from 'q3-ui-forms';
import Signup from '../pages/signup';

let spy;

jest.mock(
  'gatsby-theme-q3/src/components/AdminPublicGateway',
  () =>
    ({ children }) =>
      children,
);

jest.mock('axios', () => ({
  post: jest.fn().mockReturnValue({
    then: jest.fn().mockImplementation((fn) => fn()),
  }),
}));

beforeAll(() => {
  spy = jest.spyOn(React, 'useState');
});

describe('Signup', () => {
  it('should set done on success', () => {
    const setState = jest.fn();
    spy.mockReturnValue([false, setState]);

    global
      .shallow(<Signup />)
      .find(Builders.Form)
      .props()
      .onSubmit({});

    expect(setState).toHaveBeenCalledWith(true);
  });

  it('should not render form', () => {
    spy.mockReturnValue([true]);

    expect(
      global
        .shallow(<Signup />)
        .find(Builders.Form)
        .exists(),
    ).toBeFalsy();
  });
});
