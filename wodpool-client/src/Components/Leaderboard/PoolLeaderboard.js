import React from 'react'

//MUI
import Paper from '@material-ui/core/Paper'
import Button from "@material-ui/core/Button"

//components
import SortHelper from './SortHelper';
//style
import {useStyles} from '../../util/MakeStyles';
import {leaderboardStyles} from './LeaderboardStyle';


  // Learning how to create sortable data


function PoolLeaderboard(props) {
    const classes = leaderboardStyles();
    const global= useStyles();
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
        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr>
              <th className={classes.th25}>
                <Button
                  type="button"
                  onClick={() => requestSort('pointsToDate')}
                  className={classes.thBtn}
                >
                  Rank
                </Button>
              </th>
              <th className={classes.th50}>
                <Button
                  type="button"
                  onClick={() => requestSort('handle')}
                  className={classes.thBtn}
                  hover
                >
                  Handle
                </Button>
              </th>
              <th  className={classes.th25}>
                <Button
                  type="button"
                  onClick={() => requestSort('pointsToDate')}
                  className={classes.thBtn}
                >
                  Points
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={classes.tRow}>
                <td className={classes.tDataAlignCenter}>{index + 1}</td>
                <td className={classes.tDataAlignLeft}>{item.handle}</td>
                <td className={classes.tDataAlignCenter}>{item.pointsToDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

    return (
        <Paper className={global.paper}>
         <LeaderTable products={competitors}/>
        </Paper>
    )
}

export default PoolLeaderboard
