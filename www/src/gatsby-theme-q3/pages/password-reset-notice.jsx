import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import PasswordResetNotice from 'gatsby-theme-q3/src/pages/password-reset-notice';

export default (props) => (
  <AdminPublicGateway>
    <PasswordResetNotice {...props} />
  </AdminPublicGateway>
);
