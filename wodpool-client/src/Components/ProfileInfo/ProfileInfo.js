import React from 'react'
//MUI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
//Assets
import {useStyles} from '../../util/MakeStyles';
import { profileStyle } from './ProfileStyles';
import {LocationOn, EmojiPeopleOutlined, FitnessCenter, Info} from "@material-ui/icons";
//Components
import ProfileDetails from './ProfileDetails';
import ProfileWallet from './ProfileWallet';


function ProfileInfo(props) {
    const global = useStyles();
    const classes = profileStyle();
    const profile = props.profile;

    return (
        <>
            <Typography variant="h4">
                Welcome, {profile.handle}
            </Typography>
            <Typography variant="caption" color="textSecondary">
                <Info className={global.infoIcon}/>
                You can always edit your profile details here!
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={8} className={classes.container}>
                    <Paper className={classes.paper}>
                     <ProfileDetails profile={profile}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}  className={classes.container}>
                    <Paper className={classes.paper}>
                      <ProfileWallet profile={profile}/>
                    </Paper>
                </Grid>

            </Grid>
        </>
    )
}

export default ProfileInfo
