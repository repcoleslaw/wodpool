import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Hidden,
  IconButton,
  Divider,
  List,
  ListItem,
} from '@material-ui/core';
import Dialog from 'q3-ui-dialog';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { useTranslation } from 'q3-ui-locale';
import MenuIcon from '@material-ui/icons/Menu';
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
            <Hidden mdDown>
              <Grid component="nav" container spacing={1}>
                <Grid item>
                  <Button component={Link} to="/app/pools">
                    {t('pools')}
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
            </Hidden>
            <Hidden smUp>
              <Dialog
                title="wodpool"
                variant="drawer"
                closeOnRouteChange
                renderContent={() => (
                  <>
                    <List>
                      <ListItem>
                        <Button
                          component={Link}
                          fullWidth
                          to="/app/pools"
                        >
                          {t('pools')}
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button
                          fullWidth
                          component={Link}
                          to="/about"
                        >
                          {t('about')}
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button
                          fullWidth
                          component="a"
                          href="https://donttalkaboutwodpool.ca/contact-us"
                          target="_blank"
                        >
                          {t('contact')}
                        </Button>
                      </ListItem>
                    </List>
                    <Box mt={4}>
                      <Divider />
                      <Box
                        display="flex"
                        justifyContent="center"
                        textAlign="center"
                        mt={2}
                      >
                        <Box display="inline-block">
                          <HeaderAccount />
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
                renderTrigger={(onClick) => (
                  <IconButton onClick={onClick}>
                    <MenuIcon />
                  </IconButton>
                )}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
