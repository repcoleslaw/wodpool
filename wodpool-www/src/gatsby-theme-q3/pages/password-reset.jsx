import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import PasswordReset from 'gatsby-theme-q3/src/pages/password-reset';

export default (props) => (
  <AdminPublicGateway>
    <PasswordReset {...props} />
  </AdminPublicGateway>
);
