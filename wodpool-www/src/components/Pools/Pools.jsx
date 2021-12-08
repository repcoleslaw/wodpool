import React from 'react';
import useRest from 'q3-ui-rest';
import { map } from 'lodash';
import {
  Box,
  Fade,
  Grid,
  Button,
  Divider,
  CircularProgress,
} from '@material-ui/core';
import { useTranslation } from 'q3-ui-locale';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Pagination from '../Pagination';
import Page from '../Page';
import PoolsCard from '../PoolsCard';
import useQuery from '../useQuery';
import withQuery from '../withQuery';

const Pools = () => {
  const { t } = useTranslation('labels');
  const q = useQuery();

  const r = useRest({
    url: '/pools',
    pluralized: 'pools',
    key: 'pool',
    runOnInit: true,
    location: q,
  });

  return (
    <Page title="pools">
      <Box mb={1}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="outlined"
                onClick={q.reverseSort}
                startIcon={
                  String(q.sort).includes('-') ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                }
              >
                {t('sortStartDate')}
              </Button>
            </Grid>
            <Grid item>
              <FormControlLabel
                label={t('isMine')}
                control={
                  <Switch
                    name="isMine"
                    checked={q.isMine}
                    onChange={q.reverseFilter}
                  />
                }
              />
              <FormControlLabel
                label={t('isCurrent')}
                control={
                  <Switch
                    name="isCurrent"
                    checked={q.isCurrent}
                    onChange={q.reverseFilter}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box my={2}>
        <Divider />
      </Box>
      {r.fetching ? (
        <Box align="center" p={6}>
          <CircularProgress />
        </Box>
      ) : (
        <Box minHeight={250}>
          <Grid container spacing={1}>
            {map(r?.pools, (pool, idx) => (
              <Fade in timeout={(idx + 1) * 85}>
                <Grid item xs={12} md={6} lg={4} xl={4}>
                  <PoolsCard key={pool.id} {...pool} />
                </Grid>
              </Fade>
            ))}
          </Grid>
        </Box>
      )}
      <Pagination {...r} />
    </Page>
  );
};

export default withQuery(
  Pools,
  '?sort=startsOn&isCurrent=true&isMine=false',
);
