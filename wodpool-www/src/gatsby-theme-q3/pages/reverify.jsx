import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import Reverify from 'gatsby-theme-q3/src/pages/reverify';

const CustomReverify = (props) => (
  <AdminPublicGateway>
    <Reverify {...props} />
  </AdminPublicGateway>
);

export default CustomReverify;
