import React from 'react'
//MUI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
//Styles
import { useStyles } from "../../util/MakeStyles";

function HomeAvailablePools() {
  const classes = useStyles();

  return (
    <div id="pools"className={classes.section}>
        <Typography className={classes.sectionTitle}variant="h3">
        Available Pools
        </Typography>
        <Paper className={classes.paper}>
          This is the available pool carousel place
       </Paper>
       </div>
  )
}

export default HomeAvailablePools
