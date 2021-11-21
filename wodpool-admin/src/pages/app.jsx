import React from 'react';
import { get } from 'lodash';
import { AdminRouter } from 'gatsby-theme-q3/src/components';
import pages from '../components';

export default () => (
  <AdminRouter
    AdminProps={{
      AppProps: {
        pages,
      },
      ProfileActionsProps: {
        includeDocumentation: false,
      },
    }}
    Gatekeeper={{
      redirectCheck: (e) =>
        get(e, 'role') !== 'Administrator'
          ? '/login'
          : undefined,
    }}
  />
);
