import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Paper,
  Container,
  Typography,
  Tab,
} from '@material-ui/core';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@material-ui/lab';
import { filter, reduce, get, map, some } from 'lodash';
import { useTranslation } from 'q3-ui-locale';
import PoolLeaderboardTotal from '../PoolLeaderboardTotal';
import PoolLeaderboardWeekly from '../PoolLeaderboardWeekly';
import useStyle from '../Sponsors/styles';

const PoolLeaderboard = ({ competitors }) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const cls = useStyle();

  const convertArrayIndexToWeekNumber = (_, idx) => idx + 1;
  const handleChange = (_, newValue) => setValue(newValue);

  const getMaxWeeks = () =>
    reduce(
      competitors,
      (acc, curr) =>
        Math.max(...map(curr?.weeks, 'week').concat(acc)),
      0,
    );

  const getCompetitorsOfWeek = (week) =>
    map(
      filter(competitors, (competitor) =>
        some(
          get(competitor, 'weeks', []),
          ({ week: recordedWeek }) => recordedWeek === week,
        ),
      ),
      (competitor) => ({
        ...competitor,
        week: competitor.weeks.find(
          (item) => item.week === week,
        ),
      }),
    );

  const numberOfWeeks = Array.from({
    length: getMaxWeeks(),
  }).map(convertArrayIndexToWeekNumber);

  return (
    numberOfWeeks.length > 0 && (
      <Container>
        <Box mb={1}>
          <Paper>
            <Box p={2}>
              <TabContext value={value}>
                <Typography
                  variant="h2"
                  className={cls.title}
                >
                  <span>{t('titles:leaderboard')}</span>
                </Typography>
                <TabList
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={handleChange}
                >
                  <Tab
                    value={0}
                    label={t('labels:total')}
                  />
                  {numberOfWeeks.map((week) => (
                    <Tab
                      key={week}
                      label={`${t('labels:week')} ${week}`}
                      value={week}
                    />
                  ))}
                </TabList>
                <TabPanel value={0}>
                  <PoolLeaderboardTotal
                    data={competitors}
                  />
                </TabPanel>
                {numberOfWeeks.map((week) => (
                  <TabPanel key={week} value={week}>
                    <PoolLeaderboardWeekly
                      data={getCompetitorsOfWeek(week)}
                    />
                  </TabPanel>
                ))}
              </TabContext>
            </Box>
          </Paper>
        </Box>
      </Container>
    )
  );
};

PoolLeaderboard.defaultProps = {
  competitors: [],
};

PoolLeaderboard.propTypes = {
  competitors: PropTypes.arrayOf(
    PropTypes.shape({
      handle: PropTypes.string,
      // eslint-disable-next-line
      weeks: PropTypes.array,
    }),
  ),
};

export default PoolLeaderboard;
