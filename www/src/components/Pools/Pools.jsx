import React from 'react';
import useRest from 'q3-ui-rest';
import { map } from 'lodash';
import {
  Box,
  Container,
  Fade,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PoolsCard from '../PoolsCard';
import useStyle from '../Sponsors/styles';
import useDate from '../useDate';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Pools = () => {
  const cls = useStyle();
  const { t } = useTranslation('titles');
  const endsOn = useDate();

  const r = useRest({
    url: '/pools',
    pluralized: 'pools',
    key: 'pool',
    runOnInit: true,
    location: {
      search: `?sort=startsOn&limit=250&endsOn>=${endsOn}`,
    },
  });

  // IF

  return (
    <Box my={4}>
      <Container>
        <Typography
          align="center"
          variant="h2"
          className={cls.title}
        >
          <span> {t('pools')}</span>
        </Typography>
        <Box mb={1}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={<Switch name="checkedA" />}
                  label="Show only mine"
                />
                <FormControlLabel
                  control={<Switch name="checkedA" />}
                  label="Hide past"
                />
              </Grid>
              <Grid item>
                <Button>
                  <ExpandLessIcon />
                  Start date
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={1}>
          {map(r?.pools, (pool, idx) => (
            <Fade in timeout={(idx + 1) * 85}>
              <Grid item xs={12} md={6} lg={4} xl={4}>
                <PoolsCard key={pool.id} {...pool} />
              </Grid>
            </Fade>
          ))}
        </Grid>
        PAGE...
      </Container>
    </Box>
  );
};

export default Pools;
