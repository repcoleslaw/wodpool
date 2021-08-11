import React from 'react'
//MUI
import { Typography } from '@material-ui/core'
import Grid from'@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

// Styles
import {useStyles} from '../../util/MakeStyles';

function HomeAddResources() {

  const classes = useStyles();

  return (
    <div className={classes.section}>
    <Typography variant="h3" className={classes.sectionTitle}>
      Additional Resources
    </Typography>
    <div className={classes.subsection}>
    <Grid container justify="center" spacing={8}>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <Typography variant="subtitle1">
            Training Resources // Coming Soon
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
        <Typography variant="subtitle1">
           Gym Finder // Coming Soon
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
        <Typography variant="subtitle1">
           Merch! // Coming Soon
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </div>
  </div>
  )
}

export default HomeAddResources
