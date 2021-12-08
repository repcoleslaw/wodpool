import React from 'react';
import PasswordChange from 'gatsby-theme-q3/src/pages/password-change';
import { PublicTemplate } from 'gatsby-theme-q3/src/components';

const CustomPasswordChange = (props) => (
  <PublicTemplate>
    <PasswordChange {...props} />
  </PublicTemplate>
);

export default CustomPasswordChange;
