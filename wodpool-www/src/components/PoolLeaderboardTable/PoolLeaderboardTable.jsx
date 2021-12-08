import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map, orderBy, size } from 'lodash';
import { useTranslation } from 'q3-ui-locale';
import PoolLeaderboardTableRow from '../PoolLeaderboardTableRow';
import useStyle from './styles';

const PoolLeaderboardTable = ({ data }) => {
  const { t } = useTranslation('labels');
  const cls = useStyle();

  return (
    <Table className={cls.root}>
      <TableHead>
        <TableRow>
          <TableCell component="th" className={cls.rank}>
            {t('rank')}
          </TableCell>
          <TableCell component="th">
            {t('competitor')}
          </TableCell>
          <TableCell component="th" className={cls.points}>
            {t('points')}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {map(data, (row, idx) => (
          <PoolLeaderboardTableRow
            key={row.id}
            rank={idx + 1}
            {...row}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default PoolLeaderboardTable;
