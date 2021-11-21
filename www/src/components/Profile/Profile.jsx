import React from 'react';
import ProfileGeneral from 'q3-admin/lib/containers/ProfileGeneral';
import { Builders } from 'q3-ui-forms';
import { Grid } from '@material-ui/core';
import Page from '../Page';

export default () => (
  <Page title="profile">
    <Grid container>
      <Grid item xl={6}>
        <ProfileGeneral
          fieldKeys={['handle']}
          fields={
            <Builders.Field
              name="handle"
              disabled
              xl={6}
              lg={6}
            />
          }
        />
      </Grid>
      <Grid item>
        <p>Notifications</p>
        <p>Delete account.</p>
      </Grid>
    </Grid>
  </Page>
);
