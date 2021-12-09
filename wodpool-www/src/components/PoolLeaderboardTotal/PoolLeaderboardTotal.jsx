import React from 'react';
import PropTypes from 'prop-types';
import { map, orderBy } from 'lodash';
import PoolLeaderboardTable from '../PoolLeaderboardTable';

const PoolLeaderboardTotal = ({ data }) => (
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

PoolLeaderboardTotal.defaultProps = {
  data: [],
};

PoolLeaderboardTotal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      pointsToDate: PropTypes.number,
    }),
  ),
};

export default PoolLeaderboardTotal;
