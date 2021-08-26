import React from 'react'
//MUI
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

//COMPONENTS
import ProfileEdit from './ProfileEdit';

//ASSETS
import {profileStyle} from './ProfileStyles';


function ProfileDetails(props) {
    const classes = profileStyle();
    const profile = props.profile;
    //modal edit profile form
    const [modal, setModal] = React.useState(false);
    //handler
    const openModal = () => {
        setModal(true);
        console.log(modal);
    }
    const closeModal = () => {
        setModal(false);
        console.log(modal);
    }


    if (modal) {
        return (
            <ProfileEdit handler={closeModal} profile={profile}/>
        )
    } else {
        return (
            <>
                <Grid container className={classes.content}>
                    <Grid item xs={12}>
                      <Button className={classes.edtBtn} size="small" variant="outlined" color="secondary" onClick={openModal}>Edit Details</Button>
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

  
}

export default ProfileDetails
