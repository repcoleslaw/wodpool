import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../util/MakeStyles'
import Typography from '@material-ui/core/Typography';

//import logos
import DarylLogo from '../../assets/Sponsors/2019BadgeReverse.png'


function Sponsors(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.section}>
      <hr/>
      <Typography variant="subtitle1">
        Sponsors
      </Typography>
      {/* place logos in here */}
      <Grid container justify="center">
        <Grid item xs={6} sm={4} md={2}>
          <img className={classes.sponsorImg} src={DarylLogo}/>
        </Grid>
      </Grid>
      <hr/>
    </div>
  )
}

export default Sponsors
