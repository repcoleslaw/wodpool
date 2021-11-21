import React from 'react';
import useRest from 'q3-ui-rest';
import { Link } from 'gatsby';
import { map } from 'lodash';
import {
  Box,
  Container,
  Fade,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PoolsCard from '../PoolsCard';
import useStyle from '../Sponsors/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PoolsFeatured = () => {
  const cls = useStyle();
  const { t } = useTranslation('titles');

  const r = useRest({
    url: `/pools`,
    pluralized: 'pools',
    key: 'pool',
    runOnInit: true,
    location: {
      search: `?sort=startsOn&featured=true&limit=6&isCurrent=true`,
    },
  });

  return (
    <Box my={4}>
      <Container>
        <Typography
          align="center"
          variant="h2"
          className={cls.title}
        >
          <span> {t('featuredPools')}</span>
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          {map(r?.pools, (pool, idx) => (
            <Fade in timeout={(idx + 1) * 85}>
              <Grid item xs={12} md={6} lg={4} xl={4}>
                <PoolsCard key={pool.id} {...pool} />
              </Grid>
            </Fade>
          ))}
        </Grid>
        <Box mt={2} textAlign="center">
          <Button
            component={Link}
            to="/app/pools"
            color="secondary"
            endIcon={<NavigateNextIcon />}
          >
            {t('labels:allCurrentPools')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PoolsFeatured;
