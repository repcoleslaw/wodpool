import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import Verify from 'gatsby-theme-q3/src/pages/verify';

const CustomVerify = (props) => (
  <AdminPublicGateway>
    <Verify {...props} />
  </AdminPublicGateway>
);

export default CustomVerify;
