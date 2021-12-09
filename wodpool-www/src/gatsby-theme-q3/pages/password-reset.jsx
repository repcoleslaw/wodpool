import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import PasswordReset from 'gatsby-theme-q3/src/pages/password-reset';

const CustomPasswordReset = (props) => (
  <AdminPublicGateway>
    <PasswordReset {...props} />
  </AdminPublicGateway>
);

export default CustomPasswordReset;
