import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import PasswordChange from 'gatsby-theme-q3/src/pages/password-change';

export default (props) => (
  <AdminPublicGateway>
    <PasswordChange {...props} />
  </AdminPublicGateway>
);
