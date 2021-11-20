import React from 'react';
import { Router } from '@reach/router';
import {
  AdminPrivateGateway,
  Redirect,
} from 'gatsby-theme-q3/src/components';
import { Pool, Pools } from '../components';

export default () => (
  <AdminPrivateGateway>
    <Router basepath="/app">
      <Pools path="pools" />
      <Pool path="pools/:id" />
      <Redirect default to="/" />
    </Router>
  </AdminPrivateGateway>
);
