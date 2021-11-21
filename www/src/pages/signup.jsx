import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import { Builders } from 'q3-ui-forms';
import { Box, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Signup = (props) => {
  const [done, setDone] = React.useState(false);
  const { t } = useTranslation();

  return (
    <AdminPublicGateway {...props}>
      {done ? (
        <Alert severity="success">
          {t('descriptions:signupDone')}
        </Alert>
      ) : (
        <Box textAlign="left">
          <Typography
            align="center"
            variant="h1"
            gutterBottom
          >
            {t('titles:signup')}
          </Typography>
          <Builders.Form
            submitLabel="letsGo"
            onSubmit={(values) =>
              axios
                .post(`/q3-api-users`, {
                  __t: 'competitors',
                  role: 'Competitor',
                  ...values,
                })
                .then(() => {
                  setDone(true);
                })
            }
          >
            <Builders.Field
              name="firstName"
              type="text"
              required
              xl={12}
              lg={12}
            />
            <Builders.Field
              name="lastName"
              type="text"
              required
              xl={12}
              lg={12}
            />
            <Builders.Field
              name="email"
              type="email"
              required
              xl={12}
              lg={12}
            />
            <Builders.Field
              name="handle"
              type="text"
              required
              xl={12}
              lg={12}
            />
            <Builders.Field
              name="allowExtraEmails"
              type="checkbox"
            />
            <Builders.Field
              required
              name="termsAccepted"
              type="checkbox"
            />
          </Builders.Form>
        </Box>
      )}
    </AdminPublicGateway>
  );
};

export default Signup;
