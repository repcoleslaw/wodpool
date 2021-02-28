import React from 'react';
import { Router } from '@reach/router';
import AdminApp from 'q3-admin';
import logoSrc from '../../static/icon.png';
import AdminPrivateGateway from 'gatsby-theme-q3/src/components/AdminPrivateGateway';
import { AppWrapper } from '../components';
import pages from '../views';

export default () => (
  <AdminPrivateGateway>
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
  </AdminPrivateGateway>
);
