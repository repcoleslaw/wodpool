import React from 'react'
import axios from 'axios'
//MUI
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { Info, Label } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
//Assets
import {useStyles} from '../../util/MakeStyles';
import { profileStyle } from './ProfileStyles';

function ProfileEdit(props) {
  const classes = profileStyle();
  const global = useStyles();
  const profile = props.profile;

  const [formState, setFormState] = React.useState({});

  //handle submit
  const handleSubmit = () => {
    
    //post profile bio details to ___ route?
    axios.post(`/user`)

    //Then on Success, close form.
    props.handler();
    //on fail
    alert('Ooops! We had problems submitting your profile details');
  }

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
    <Grid container className={classes.content}>
      <Grid item xs={12}>
      <Button 
        variant="outlined" 
        color="secondary" 
        size="small" 
        className={classes.edtBtn} 
        onClick={props.handler}
        >
          CLOSE EDIT
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Info className={global.infoIcon}/>
      <Typography variant="caption">Don't forget to submit your edits to save your profile! If you do not see the changes, try refreshing your page. </Typography>
      <Grid item xs={12}>

        <Paper className={global.paper}>
          <form className={global.form}>
          <Grid item xs={12}>
          <Typography variant="subtitle1"className={classes.formLabel}>Personal Details</Typography>
          <TextField
                onChange={handlechange}
                variant="outlined"
                id="handle"
                name="handle"
                label="Handle"
                type="string"
                style={{width:"100%"}}
                inputProps={{ className: classes.formField }}
              />
          </Grid>
          <Grid item xs={12}>
          <TextField
                onChange={handlechange}
                variant="outlined"
                id="location"
                name="location"
                label="Location"
                type="string"
                style={{width:"100%"}}
                inputProps={{ className: classes.formField }}
              />
          </Grid>
          <Grid item xs={12}>
          <TextField
                onChange={handlechange}
                variant="outlined"
                id="description"
                name="description"
                label="Description"
                type="string"
                multiline="true"
                rows="4"
                style={{width:"100%"}}
                inputProps={{ className: classes.formField }}
              />
          </Grid>
          </form>
        </Paper>       
      </Grid>

      
      <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>

      </Grid>
    </Grid>


    </>
  )
}

export default ProfileEdit
