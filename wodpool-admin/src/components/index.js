import React from 'react';
import { Redirect } from '@reach/router';
import Pools from './Pools';
import Users from './Users';

const SendToPools = () => (
  <Redirect noThrow to="/app/pools" />
);

export default [
  {
    home: true,
    component: SendToPools,
  },
  ...Pools,
  ...Users,
];
