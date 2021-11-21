import React from 'react';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Divider,
  Typography,
  Link,
} from '@material-ui/core';
import Image from 'gatsby-image';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import useStyle from './styles';

const Footer = () => {
  const cls = useStyle();
  const { t } = useTranslation('labels');

  return (
    <Box bgcolor="primary.main" mt={2} py={2}>
      <Container>
        <Image
          fluid={{
            src: '/logo.png',
          }}
          className={cls.logo}
          alt="Wodpool logo"
        />
        <Grid
          justifyContent="center"
          container
          spacing={4}
          wrap="nowrap"
        >
          <Grid item>
            <List
              subheader={
                <ListSubheader>{t('social')}</ListSubheader>
              }
            >
              <ListItem>
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.instagram.com/donttalkaboutwodpool/"
                >
                  Instagram
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://twitter.com/wodpool"
                >
                  Twitter
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.facebook.com/donttalkaboutwodpool"
                >
                  Facebook
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List
              subheader={
                <ListSubheader>{t('legal')}</ListSubheader>
              }
            >
              <ListItem>
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://donttalkaboutwodpool.ca/terms-and-conditions"
                >
                  {t('terms')}
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://donttalkaboutwodpool.ca/privacy-policy"
                >
                  {t('privacy')}
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box mt={2} mb={3}>
          <Divider />
        </Box>
        <Box mb={1}>
          <Typography align="center">
            <small>
              © {moment().format('YYYY')} Wodpool
            </small>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
