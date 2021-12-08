import React from 'react';
import useRest from 'q3-ui-rest';
import { Link, useParams } from '@reach/router';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { AuthContext } from 'q3-ui-permissions';
import { useTranslation } from 'q3-ui-locale';
import HeroPhoto from '../HeroPhoto';
import PoolLeaderboard from '../PoolLeaderboard';
import PoolSchedule from '../PoolSchedule';
import PoolScore from '../PoolScore';
import useStyle from './styles';
import usePoolRegistration from '../usePoolRegistration';
import useSponsorStyles from '../Sponsors/styles';

const Pool = () => {
  const userId =
    React.useContext(AuthContext)?.state?.profile?.id;

  const { id } = useParams();
  const cls = useStyle();
  const cls2 = useSponsorStyles();
  const { t } = useTranslation('labels');

  const r = useRest({
    url: `/pools/${id}`,
    key: 'pool',
    runOnInit: true,
  });

  const { currentWeek, hasJoined, join, type } =
    usePoolRegistration(r.pool, r.poll);

  const renderButton = () => {
    if (!userId) return null;
    if (!hasJoined)
      return (
        <Button
          onClick={join}
          color="secondary"
          variant="contained"
        >
          {t('join')}
        </Button>
      );

    return (
      <PoolScore
        type={type}
        refresh={r?.poll}
        week={currentWeek}
      />
    );
  };

  if (r.fetching)
    return <div style={{ height: '100vh' }} />;

  return (
    <Box className={cls.root}>
      <Box position="relative" mb={2}>
        <HeroPhoto src={r?.pool?.photo} />
        <Box position="relative" py={4}>
          <Container>
            <Box maxWidth={450}>
              <Box mb={1.5}>
                <Button
                  startIcon={<ArrowBackIosIcon />}
                  component={Link}
                  to=".."
                >
                  {t('back')}
                </Button>
              </Box>
              <Typography variant="h1">
                {r?.pool?.name}
              </Typography>
              <Box py={1.5}>
                <Typography>
                  {r?.pool?.description}
                </Typography>
              </Box>
              {renderButton()}
            </Box>
          </Container>
        </Box>
      </Box>
      <PoolLeaderboard {...r?.pool} />
      <Container>
        <Paper>
          <Box p={2}>
            <Typography variant="h2" className={cls2.title}>
              <span>{t('titles:schedule')}</span>
            </Typography>
            <PoolSchedule {...r?.pool} />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Pool;
