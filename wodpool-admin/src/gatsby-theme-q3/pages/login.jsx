import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import Login from 'gatsby-theme-q3/src/pages/login';

export default (props) => (
  <AdminPublicGateway {...props}>
    <Login />
  </AdminPublicGateway>
);
