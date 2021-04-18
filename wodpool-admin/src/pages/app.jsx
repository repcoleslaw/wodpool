import React from 'react';
import { Router } from '@reach/router';
import AdminApp from 'q3-admin';
import logoSrc from '../../static/icon.png';
import Gatekeeper from '../components/Gatekeeper';
import { AppWrapper } from '../components';
import pages from '../components';

export default () => (
  <Gatekeeper>
    <Router basepath="/app">
      <AdminApp
        path="*"
        AppProps={{
          directory: '/app/',
          pages,
        }}
        NavProps={{
          title: 'WP',
          logoSrc,
          pages,
        }}
      />
    </Router>
  </Gatekeeper>
);
