import React from 'react';
import { get } from 'lodash';
import { AdminRouter } from 'gatsby-theme-q3/src/components';
import EmailEditor from 'q3-ui-emaileditor';
import QueueLogs from 'q3-ui-queuelogs';
import pages from '../components';

const App = () => (
  <AdminRouter
    AdminProps={{
      AppProps: {
        addons: [EmailEditor, QueueLogs],
        pages,
      },
      ProfileActionsProps: {
        includeDocumentation: false,
      },
    }}
    GatekeepProps={{
      redirectCheck: (e) =>
        get(e, 'role') !== 'Administrator'
          ? '/login'
          : undefined,
    }}
  />
);

export default App;
