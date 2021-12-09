import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import Login from 'gatsby-theme-q3/src/pages/login';

const CustomLogin = (props) => (
  <AdminPublicGateway {...props}>
    <Login />
  </AdminPublicGateway>
);

export default CustomLogin;
