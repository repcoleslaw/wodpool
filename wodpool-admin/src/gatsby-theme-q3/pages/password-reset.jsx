import React from 'react';
import PasswordReset from 'gatsby-theme-q3/src/pages/password-reset';
import { PublicTemplate } from 'gatsby-theme-q3/src/components';

const CustomPasswordReset = (props) => (
  <PublicTemplate>
    <PasswordReset {...props} />
  </PublicTemplate>
);

export default CustomPasswordReset;
