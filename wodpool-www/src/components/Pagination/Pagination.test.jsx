import React from 'react';
import { Button } from '@material-ui/core';
import Pagination from './Pagination';

jest.mock('../usePage', () =>
  jest.fn().mockReturnValue(jest.fn()),
);

const getNumberOfRenderedButtons = (props = {}) =>
  global.shallow(<Pagination {...props} />).find(Button)
    .length;

describe('Pagination', () => {
  it('should not render buttons', () => {
    expect(getNumberOfRenderedButtons()).toBe(0);
  });

  it('should render single', () => {
    expect(
      getNumberOfRenderedButtons({
        hasPrevPage: true,
        hasNextPage: false,
      }),
    ).toBe(1);
  });

  it('should render both', () => {
    expect(
      getNumberOfRenderedButtons({
        hasPrevPage: true,
        hasNextPage: true,
      }),
    ).toBe(2);
  });
});
