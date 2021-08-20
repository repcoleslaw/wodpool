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
            This is the points wallet.
            <Typography variant="subtitle1" color="error"> This feature is coming soon </Typography>
        </div>
    )
}

export default ProfileWallet
