import React from 'react'
//MUI
import Paper from '@material-ui/core/Paper'
import SortHelper from './SortHelper'
// styles
import { useStyles } from "../../util/MakeStyles";
import {leaderboardStyles} from './LeaderboardStyle';
import { Typography } from '@material-ui/core';

function EventLeaderboard(props) {
  const global= useStyles();
  const classes = leaderboardStyles();
  const sh = SortHelper();
  const id = props.id
  const pool = props.pool
  const competitors = pool.competitors;


  const LeaderTable = (props) => {
    const { items, requestSort, sortConfig } = sh.useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <table>
        <caption>Event Leaderboard</caption>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('pointsToDate')}
                className={getClassNamesFor('pointsToDate')}
              >
                Week
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('handle')}
                className={getClassNamesFor('handle')}
              >
                Handle
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('pointsToDate')}
                className={getClassNamesFor('pointsToDate')}
              >
                Points
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.handle}</td>
              <td>{item.pointsToDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  console.log(competitors)

  return (
      <Paper className={global.paper}>
        <Typography variant="body1" color="error">
          Feature coming soon.
        </Typography>
       {/* <LeaderTable products={competitors}/> */}
      </Paper>
  )
}

export default EventLeaderboard
