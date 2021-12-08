import React from 'react';
import Reverify from 'gatsby-theme-q3/src/pages/reverify';
import { PublicTemplate } from 'gatsby-theme-q3/src/components';

const CustomReverify = (props) => (
  <PublicTemplate>
    <Reverify {...props} />
  </PublicTemplate>
);

export default CustomReverify;
