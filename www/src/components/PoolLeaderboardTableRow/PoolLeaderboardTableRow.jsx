import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { AuthContext } from 'q3-ui-permissions';

const PoolLeaderboardRow = ({ rank, handle, points }) => {
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

export default PoolLeaderboardRow;
