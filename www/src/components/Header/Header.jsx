import React from 'react';
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Toolbar,
} from '@material-ui/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { useTranslation } from 'react-i18next';
import HeaderAccount from '../HeaderAccount';

const Header = () => {
  const { t } = useTranslation('labels');

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <Grid
          alignItems="center"
          container
          justifyContent="space-between"
        >
          <Grid item>
            <Link to="/">
              <Image
                fluid={{ src: '/favicon.png' }}
                alt="WodPool logo"
                style={{ height: 45, width: 45 }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </Link>
          </Grid>
          <Grid item>
            <Grid component="nav" container spacing={1}>
              <Grid item>
                <Button component={Link} to="/app/pools">
                  {t('pool')}
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/about">
                  {t('about')}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component="a"
                  href="https://donttalkaboutwodpool.ca/contact-us"
                  target="_blank"
                >
                  {t('contact')}
                </Button>
              </Grid>
              <Grid item>
                <Box ml={2}>
                  <HeaderAccount />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
