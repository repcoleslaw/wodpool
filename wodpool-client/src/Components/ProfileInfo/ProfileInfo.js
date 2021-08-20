import React from 'react'
//MUI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
//Assets
import {useStyles} from '../../util/MakeStyles'
import {LocationOn, EmojiPeopleOutlined, FitnessCenter, Info} from "@material-ui/icons";
//Components



function ProfileDetails(props) {
    const classes = useStyles();
    const profile = props.profile;

    return (
        <>
            <Typography variant="h4">
                Welcome, {profile.handle}
            </Typography>
            <Typography variant="caption" color="textSecondary">
                <Info className={classes.infoIcon}/>
                You can always edit your profile details here!
            </Typography>
            <Grid container>
                <Button size="small" variant="outlined" color="secondary" disabled>Edit Details</Button>
            </Grid>
        </>
    )
}

export default ProfileDetails
