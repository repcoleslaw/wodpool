import React from 'react'
//MUI
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

//ASSETS
import {useStyles} from '../../util/MakeStyles';
import {profileStyle} from './ProfileStyles';

function ProfileDetails(props) {
    const classes = profileStyle();
    const profile = props.profile;


    return (
        <>
            <Grid container className={classes.content}>
                <Grid item xs={12}>
                  <Button className={classes.edtBtn}disabled size="small" variant="outlined" color="secondary">Edit Details</Button>
                </Grid>
                <Grid item xs={12}>
                    <p>Name: {profile.firstName} {profile.lastName}</p>
                    <p>Location: {profile?.location ? (
                       `${profile.location}` ) : ("no location provided")
                       }
                    </p>
                    <p>Description: {profile?.description ? (
                       `${profile.description}` ) : ("no description provided")
                       }
                    </p>
                </Grid>
            </Grid>
         
        </>
    )
}

export default ProfileDetails
