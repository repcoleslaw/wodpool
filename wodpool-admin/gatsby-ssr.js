import React from 'react';
import { AppWrapper } from './src/components';
import AdminLoader from 'gatsby-theme-q3/src/components/AdminLoader';
import { useTimezoneInterceptor } from 'q3-ui-rest';

// eslint-disable-next-line
export const wrapPageElement = ({ element }) => {
  useTimezoneInterceptor();
  return <AdminLoader>{element}</AdminLoader>;
};
