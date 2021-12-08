import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import ReverifyNotice from 'gatsby-theme-q3/src/pages/reverify-notice';

export default (props) => (
  <AdminPublicGateway>
    <ReverifyNotice {...props} />
  </AdminPublicGateway>
);
