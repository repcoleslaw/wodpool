import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'q3-ui-locale';
import HeroPhoto from '../HeroPhoto';

const Hero = ({ children }) => {
  const { t } = useTranslation('descriptions');

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      position="relative"
      flexDirection="column"
      width="100%"
    >
      <HeroPhoto src="./hero.jpg" />
      <Box
        textAlign="center"
        position="relative"
        maxWidth="100%"
        px={1}
        mt={8}
        mb={4}
      >
        <Image
          fluid={{ src: '/logo.png' }}
          alt="WodPool full logo"
          style={{
            height: 105,
            width: 180,
            margin: '0 auto 1rem auto',
          }}
          imgStyle={{ objectFit: 'contain' }}
        />
        <Typography
          variant="h3"
          component="h1"
          style={{
            maxWidth: '100%',
            width: 525,
          }}
        >
          {t('site')}
        </Typography>
      </Box>
      {children && (
        <Box position="relative" width="100%">
          {children}
        </Box>
      )}
    </Box>
  );
};

Hero.defaultProps = {
  children: null,
};

Hero.propTypes = {
  children: PropTypes.node,
};

export default Hero;
