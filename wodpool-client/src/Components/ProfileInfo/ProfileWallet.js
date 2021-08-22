import React from 'react'

//MUI
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
//ASSETS
import {profileStyle} from './ProfileStyles';


function ProfileWallet() {
const classes = profileStyle();
    return (
        <div>
            <Grid container className={classes.content}>
                <Grid item xs={12}>
                    This is the points wallet.
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="error"> This feature is coming soon </Typography>
                </Grid>
            </Grid>
         
            
        </div>
    )
}

export default ProfileWallet
