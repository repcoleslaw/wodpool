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
} from '@material-ui/core';
import Image from 'gatsby-image';
import moment from 'moment';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" mt={2} py={4}>
      <Container>
        <Image
          fluid={{
            src: '/logo.png',
          }}
          imgStyle={{
            objectFit: 'contain',
          }}
          style={{
            height: 135,
            width: 95,
          }}
        />
        <Grid container spacing={4}>
          <Grid item>
            <List
              subheader={<ListSubheader>S</ListSubheader>}
            >
              <ListItem>Instagram</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Facebook</ListItem>
            </List>
          </Grid>
          <Grid item>
            <List
              subheader={<ListSubheader>S</ListSubheader>}
            >
              <ListItem>Instagram</ListItem>
              <ListItem>Twitter</ListItem>
              <ListItem>Facebook</ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Box my={2}>
          <Typography component="small">
            © {moment().format('YYYY')} Wodpool
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
