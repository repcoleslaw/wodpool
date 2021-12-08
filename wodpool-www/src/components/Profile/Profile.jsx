import React from 'react';
import ProfileGeneral from 'q3-admin/lib/containers/ProfileGeneral';
import { Builders } from 'q3-ui-forms';
import { Container } from '@material-ui/core';
import Page from '../Page';

export default () => (
  <Page title="profile">
    <Container
      maxWidth="sm"
      style={{ textAlign: 'center' }}
    >
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
    </Container>
  </Page>
);
