import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import PasswordChange from 'gatsby-theme-q3/src/pages/password-change';

const CustomPasswordChange = (props) => (
  <AdminPublicGateway>
    <PasswordChange {...props} />
  </AdminPublicGateway>
);

export default CustomPasswordChange;
