import React from 'react';
import useRest from 'q3-ui-rest';
import { map } from 'lodash';
import {
  Box,
  Container,
  Fade,
  Grid,
  Typography,
} from '@material-ui/core';
import PoolsCard from '../PoolsCard';

const Pools = () => {
  const r = useRest({
    url: '/pools?sort=startsOn',
    pluralized: 'pools',
    key: 'pool',
    runOnInit: true,
  });

  return (
    <Box my={4}>
      <Container>
        <Typography>Pools</Typography>
        <Grid container spacing={1}>
          {map(r?.pools, (pool, idx) => (
            <Fade in timeout={(idx + 1) * 85}>
              <Grid item xs={6} md={6} lg={4} xl={4}>
                <PoolsCard key={pool.id} {...pool} />
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pools;
