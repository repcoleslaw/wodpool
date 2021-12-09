import React from 'react';
import PropTypes from 'prop-types';
import { map, orderBy, get } from 'lodash';
import PoolLeaderboardTable from '../PoolLeaderboardTable';

const PoolLeaderboardWeekly = ({ data }) => (
  <PoolLeaderboardTable
    data={map(
      orderBy(
        data,
        ['week.points', 'createdAt'],
        ['desc', 'asc'],
      ),
      (row) => ({
        ...row,
        points: get(row, 'week.points'),
      }),
    )}
  />
);

PoolLeaderboardWeekly.defaultProps = {
  data: [],
};

PoolLeaderboardWeekly.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      week: {
        createdAt: PropTypes.string,
        points: PropTypes.number,
      },
    }),
  ),
};

export default PoolLeaderboardWeekly;
