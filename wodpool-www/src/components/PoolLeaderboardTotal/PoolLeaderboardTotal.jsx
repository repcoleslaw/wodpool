import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map, orderBy } from 'lodash';
import { useTranslation } from 'q3-ui-locale';
import PoolLeaderboardTable from '../PoolLeaderboardTable';

const PoolLeaderboardTotal = ({ data }) => {
  const { t } = useTranslation('labels');

  return (
    <PoolLeaderboardTable
      data={map(
        orderBy(
          data,
          ['pointsToDate', 'createdAt'],
          ['desc', 'asc'],
        ),
        (row) => ({
          ...row,
          points: row.pointsToDate,
        }),
      )}
    />
  );
};

export default PoolLeaderboardTotal;
