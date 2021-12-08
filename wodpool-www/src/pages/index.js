import React from 'react';
import { Box } from '@material-ui/core';
import {
  Hero,
  PoolsFeatured,
  Sponsors,
} from '../components';

const Index = () => (
  <>
    <Hero>
      <PoolsFeatured />
    </Hero>
    <Box pt={4}>
      <Sponsors />
    </Box>
  </>
);

export default Index;
