import React from 'react';
import Image from 'gatsby-image';
import { Box, Typography } from '@material-ui/core';
import HeroPhoto from '../HeroPhoto';

const Hero = () => (
  <Box
    alignItems="center"
    display="flex"
    justifyContent="center"
    position="relative"
    height={550}
    width="100%"
  >
    <HeroPhoto src="./hero.jpg" />
    <Box textAlign="center" position="relative">
      <Image
        fluid={{ src: '/logo.png' }}
        alt="WodPool full logo"
        style={{ height: 105, width: 180 }}
        imgStyle={{ objectFit: 'contain' }}
      />
    </Box>
  </Box>
);

export default Hero;
