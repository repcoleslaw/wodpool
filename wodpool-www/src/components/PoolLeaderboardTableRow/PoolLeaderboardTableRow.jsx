import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import { AuthContext } from 'q3-ui-permissions';

const PoolLeaderboardTableRow = ({
  handle,
  points,
  rank,
}) => {
  const className =
    React.useContext(AuthContext)?.state?.profile
      ?.handle === handle
      ? 'is-me'
      : undefined;

  return points ? (
    <TableRow key={rank} className={className}>
      <TableCell>#{rank}</TableCell>
      <TableCell>{handle}</TableCell>
      <TableCell>{points}</TableCell>
    </TableRow>
  ) : null;
};

PoolLeaderboardTableRow.propTypes = {
  handle: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default PoolLeaderboardTableRow;
