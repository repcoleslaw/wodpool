import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map, orderBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import PoolLeaderboardTable from '../PoolLeaderboardTable';

const PoolLeaderboardTotal = ({ data }) => {
  const { t } = useTranslation('labels');

  return (
    <PoolLeaderboardTable
      data={map(
        orderBy(data, ['pointsToDate'], ['desc']),
        (row) => ({
          ...row,
          points: row.pointsToDate,
        }),
      )}
    />
  );
};

export default PoolLeaderboardTotal;
