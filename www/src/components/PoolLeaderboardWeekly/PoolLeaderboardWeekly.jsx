import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map, orderBy, get } from 'lodash';
import { useTranslation } from 'react-i18next';
import PoolLeaderboardTable from '../PoolLeaderboardTable';

const PoolLeaderboardWeekly = ({ data, week }) => {
  const { t } = useTranslation('labels');

  return (
    <PoolLeaderboardTable
      data={map(
        orderBy(
          data,
          ['week.points', 'createdAt'],
          ['desc', 'asc'],
        ),
        (row, idx) => ({
          ...row,
          points: get(row, 'week.points'),
        }),
      )}
    />
  );
};

export default PoolLeaderboardWeekly;
