import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import logo from '../../../static/icon.png';

export default (props) => (
  <AdminPublicGateway
    {...props}
    logo={logo}
    title="WODPool"
  />
);
