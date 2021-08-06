import React from 'react'
import { useStyles } from '../../util/MakeStyles'
import wordmark from "../../assets/WP-Wordmark.png";

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button";


function Hero(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.hero}>
      <Grid container direction="column" justify="center">
        <Grid item>
        <img className={classes.img} src={wordmark} alt="wodpool" />
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} sm={1}>
            <Button className={classes.btnGroup}variant="contained" color="primary" href="#pools">View Pools</Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button className={classes.btnGroup} href="https://donttalkaboutwodpool.ca/" variant="outlined" color="secondary">More Info</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
