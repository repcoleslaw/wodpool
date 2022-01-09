import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import {
  AuthContext,
  destroySession,
} from 'q3-ui-permissions';
import { useTranslation } from 'q3-ui-locale';

const HeaderAccount = () => {
  const userId =
    React.useContext(AuthContext)?.state?.profile?.id;
  const { t } = useTranslation('labels');

  const accountActions = userId
    ? [
        {
          component: Link,
          label: 'profile',
          to: '/app/profile',
        },
        {
          // must leave curried
          onClick: () => destroySession(),
          label: 'logout',
        },
      ]
    : [
        {
          component: Link,
          label: 'login',
          to: '/login',
        },
        {
          component: Link,
          label: 'signup',
          to: '/signup',
        },
      ];

  return (
    <Grid container wrap="nowrap" spacing={1}>
      {accountActions.map(({ label, ...action }) => (
        <Grid item key={label}>
          <Button
            color="secondary"
            variant="outlined"
            {...action}
          >
            {t(label)}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default HeaderAccount;
