import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../util/MakeStyles'
import Typography from '@material-ui/core/Typography';


function Sponsors(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.section}>
      <hr/>
      <Typography variant="subtitle1">
        Sponsors
      </Typography>
      <Grid container>
      </Grid>
      <hr/>
    </div>
  )
}

export default Sponsors
