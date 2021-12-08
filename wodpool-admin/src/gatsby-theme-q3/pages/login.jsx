import React from 'react';
import Login from 'gatsby-theme-q3/src/pages/login';
import { PublicTemplate } from 'gatsby-theme-q3/src/components';

const CustomLogin = (props) => (
  <PublicTemplate {...props}>
    <Login {...props} />
  </PublicTemplate>
);

export default CustomLogin;
