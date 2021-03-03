import React from 'react';
import { Redirect } from '@reach/router';

export default () => (
  <Redirect from="/" to="/app" noThrow />
);
