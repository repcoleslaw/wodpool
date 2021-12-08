import React from 'react';
import Image from 'gatsby-image';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'q3-ui-locale';
import useStyle from './styles';

const Sponsors = () => {
  const { t } = useTranslation('titles');
  const cls = useStyle();

  return (
    <Container>
      <Typography
        align="center"
        variant="h2"
        className={cls.title}
      >
        <span>{t('sponsors')}</span>
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        mb={4}
        justifyContent="center"
      >
        <Image
          fluid={{ src: '/daryls.png' }}
          className={cls.img}
          alt="Darly's log"
          title="Daryl's Bar"
        />
        <Image
          fluid={{ src: '/strong.png' }}
          className={cls.img}
          alt="Strong logo"
          title="Strong Gym"
        />
        <Image
          fluid={{ src: '/q3.png' }}
          className={cls.img}
          alt="Q3 logo"
          title="Q3"
          style={{
            filter: 'invert(1)',
          }}
        />
      </Box>
    </Container>
  );
};

export default Sponsors;
