import React from 'react'
import {Link} from 'react-router-dom'
//MUI
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
//Import Assets
import {useStyles} from '../../util/MakeStyles';

function ToScoreSubmit(props) {
  const id = props.id
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={6}>
        <Button
          component={Link}
          className={classes.btnStyle1}
          variant="contained"
          color="primary"
          to={`${id}/submit`}
        >
          SUBMIT
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          className={classes.btnStyle1}
          variant="outlined"
          color="secondary"
          href="/profile"
        >
          To Profile Page
        </Button>
      </Grid>
    </>
  );
}

export default ToScoreSubmit
