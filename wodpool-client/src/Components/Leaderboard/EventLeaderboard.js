import React from 'react'
//MUI
import Paper from '@material-ui/core/Paper'

// styles
import { useStyles } from "../../util/MakeStyles";

function EventLeaderboard(props) {
  const classes = useStyles();
  const pool = props.pool;
  const id = props.id;

  return (
    <Paper className={classes.paper}>
      This is the event board
      {id}
    </Paper>
  )
}

export default EventLeaderboard
