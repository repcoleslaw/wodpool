import React from 'react';
import Image from 'gatsby-image';
import { Box } from '@material-ui/core';

const HeroPhoto = ({ src }) => (
  <>
    <Image
      fluid={{
        src,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
    <Box
      bgcolor="primary.main"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.83,
      }}
    />
  </>
);

export default HeroPhoto;
