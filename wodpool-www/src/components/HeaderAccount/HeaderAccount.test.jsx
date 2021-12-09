import React from 'react';
import { Button } from '@material-ui/core';
import HeaderAccount from './HeaderAccount';

let spy;

beforeAll(() => {
  spy = jest.spyOn(React, 'useContext');
});

const getButtonProps = () =>
  global
    .shallow(<HeaderAccount />)
    .find(Button)
    .first()
    .text();

describe('HeaderAccount', () => {
  it('should render login', () => {
    spy.mockReturnValue({
      state: {},
    });

    expect(getButtonProps()).toMatch('login');
  });

  it('should render profile', () => {
    spy.mockReturnValue({
      state: {
        profile: {
          id: 1,
        },
      },
    });

    expect(getButtonProps()).toMatch('profile');
  });
});
