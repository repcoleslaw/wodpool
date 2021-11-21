import React from 'react';
import { Router } from '@reach/router';
import {
  AdminPrivateGateway,
  Redirect,
} from 'gatsby-theme-q3/src/components';
import { Pool, Pools, Profile } from '../components';

const App = () => (
  <AdminPrivateGateway>
    <Router basepath="/app">
      <Pools path="pools" />
      <Pool path="pools/:id" />
      <Profile path="profile" />
      <Redirect default to="/app/pools" />
    </Router>
  </AdminPrivateGateway>
);

export default App;
