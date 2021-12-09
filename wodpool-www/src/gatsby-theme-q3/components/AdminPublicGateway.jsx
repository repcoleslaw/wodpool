import React from 'react';
import AdminPublicGateway from 'gatsby-theme-q3/src/components/AdminPublicGateway';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    '& button[type="submit"]:not([disabled])': {
      backgroundColor: `${theme.palette.secondary.main} !important`,
      '&:focus, &:hover': {
        backgroundColor: `${theme.palette.secondary.dark} !important`,
      },
    },
  },
}));

export default (props) => {
  const cls = useStyle();

  return (
    <Box
      align="center"
      className={cls.root}
      bgcolor="primary.main"
      mb={-2}
    >
      <Box py={6} component="section">
        <Container maxWidth="sm">
          <Box p={2}>
            <AdminPublicGateway {...props} />{' '}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
