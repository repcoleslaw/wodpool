import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../util/MakeStyles'
import Typography from '@material-ui/core/Typography';

//import logos
import DarylLogo from '../../assets/Sponsors/2019BadgeReverse.png'
import StrongLogo from '../../assets/Sponsors/StrongGym.png'
import ThreeMerge from '../../assets/Sponsors/3mergeLogo.png'


function Sponsors(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.section}>
      <hr/>
      <Typography variant="subtitle1">
        Sponsors
      </Typography>
      {/* place logos in here */}
      <Grid container justify="center" spacing={8}>
        <Grid item xs={6} sm={4} md={2}>
          <img className={classes.sponsorImg} src={DarylLogo} alt="Daryls Bars"/>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <img className={classes.sponsorImg} src={StrongLogo} alt="99Strong Street"/>
        </Grid>
      </Grid>
      <hr/>
    </div>
  )
}

export default Sponsors
