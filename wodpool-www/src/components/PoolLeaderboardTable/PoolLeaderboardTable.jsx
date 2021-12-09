import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { map } from 'lodash';
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

PoolLeaderboardTable.defaultProps = {
  data: [],
};

PoolLeaderboardTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default PoolLeaderboardTable;
