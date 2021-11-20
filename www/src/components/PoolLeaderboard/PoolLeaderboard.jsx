import React from 'react';
import {
  Box,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Tab,
} from '@material-ui/core';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@material-ui/lab';
import { filter, reduce, size, get, map } from 'lodash';
import { useTranslation } from 'react-i18next';
import PoolLeaderboardTotal from '../PoolLeaderboardTotal';
import PoolLeaderboardWeekly from '../PoolLeaderboardWeekly';

const PoolLeaderboard = ({ competitors }) => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const convertArrayIndexToWeekNumber = (_, idx) => idx + 1;
  const handleChange = (_, newValue) => setValue(newValue);

  const getMaxWeeks = () =>
    reduce(
      competitors,
      (acc, curr) =>
        Math.max(size(curr?.weeks, 'points'), acc),
      0,
    );

  const getCompetitorsOfWeek = (week) =>
    filter(
      map(competitors, (competitor) => ({
        ...competitor,
        week: get(competitor, `weeks.${week - 1}`, null),
      })),
      'week',
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
                <Typography variant="h2">
                  {t('titles:leaderboard')}
                </Typography>
                <TabList onChange={handleChange}>
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

export default PoolLeaderboard;
