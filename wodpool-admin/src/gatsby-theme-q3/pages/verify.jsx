import React from 'react';
import Verify from 'gatsby-theme-q3/src/pages/verify';
import { PublicTemplate } from 'gatsby-theme-q3/src/components';

const CustomVerify = (props) => (
  <PublicTemplate>
    <Verify {...props} />
  </PublicTemplate>
);

export default CustomVerify;
