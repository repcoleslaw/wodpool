import React from 'react';
import useRest from 'q3-ui-rest';
import { map } from 'lodash';
import { Link, useParams } from '@reach/router';
import {
  Box,
  Button,
  Container,
  Fade,
  IconButton,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import Image from 'gatsby-image';
import Alert from '@material-ui/lab/Alert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Dialog from 'q3-ui-dialog';
import HeroPhoto from '../HeroPhoto';
import PoolLeaderboard from '../PoolLeaderboard';
import PoolSchedule from '../PoolSchedule';
import PoolsCard from '../PoolsCard';
import PoolScore from '../PoolScore';
import useStyle from './styles';
import usePoolRegistration from '../usePoolRegistration';
import { AuthContext } from 'q3-ui-permissions';

const Pool = () => {
  const userId =
    React.useContext(AuthContext)?.state?.profile?.id;
  const { id } = useParams();
  const cls = useStyle();

  const r = useRest({
    url: `/pools/${id}`,
    key: 'pool',
    runOnInit: true,
  });

  const { currentWeek, hasJoined, join } =
    usePoolRegistration(r?.pool);

  const renderButton = () => {
    if (!userId) return null;
    if (!hasJoined)
      return (
        <Button
          onClick={join}
          color="secondary"
          variant="contained"
        >
          Join Pool
        </Button>
      );

    return (
      <PoolScore refresh={r?.poll} week={currentWeek} />
    );
  };

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
                  All pools
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
            <Typography variant="h2">Schedule</Typography>
            <PoolSchedule {...r?.pool} />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Pool;
