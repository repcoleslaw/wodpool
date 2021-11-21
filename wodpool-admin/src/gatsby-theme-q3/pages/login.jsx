import React from 'react';
import Login from 'gatsby-theme-q3/src/pages/login';
import { PublicTemplate } from 'gatsby-theme-q3/src/components';

export default (props) => (
  <PublicTemplate {...props}>
    <Login {...props} />
  </PublicTemplate>
);
