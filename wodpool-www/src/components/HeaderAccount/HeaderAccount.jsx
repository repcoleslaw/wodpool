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

  const handleLogout = () => {
    destroySession();
  };

  return userId ? (
    <Grid container spacing={1}>
      <Grid item>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/app/profile"
        >
          {t('profile')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          {t('logout')}
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={1}>
      <Grid item>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/login"
        >
          {t('login')}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/signup"
        >
          {t('signup')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeaderAccount;
