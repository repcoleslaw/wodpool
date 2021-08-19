import React from 'react'
import {Link} from 'react-router-dom'
//MUI
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
//Components
import Header from '../HeaderFooter/Header'
// styles
import {useStyles} from '../../util/MakeStyles';


function PoolNotFound() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2">Oops!</Typography>
            <Typography variant="body1">There is no pool with that ID</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button className={classes.btnStyle1} component={Link} variant="contained" color="primary" to="/">Back to Home</Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button className={classes.btnStyle1} component={Link} variant="outlined" color="secondary" to="/profile">Back to Profile</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default PoolNotFound
