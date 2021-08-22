import React from "react";
import axios from "axios";
import { AuthenticationContext } from "../../Components/AuthenticationContext";

//MUI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
//COMPONENTS
import Header from "../../Components/HeaderFooter/Header";
import PoolCard from "../../Components/PoolCard/PoolCard";
import JoinedCard from '../../Components/PoolCard/ProfilePoolCard';
import usePools from "../../Components/usePools";
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
import AlertCard from '../../Components/AlertCard/AlertCard';
import MyPools from '../../Components/MyPools/MyPools';
import OtherPools from '../../Components/PromotedProfile/OtherPools';

//import assets
import {useStyles} from '../../util/MakeStyles'
import {LocationOn, EmojiPeopleOutlined, FitnessCenter, Info} from "@material-ui/icons";


const Profile = () => {
  const classes = useStyles();
  const us = usePools();
  const [profile, setProfile] = React.useState("");

  //loading
  const [isLoading, setIsLoading] = React.useState(true);
  //do i need to validate a registered user?  how am i doing that now?
  // do i need to continue to that?
  const [isNotRegistered, setIsNotRegistered] = React.useState(true);

  const auth = React.useContext(AuthenticationContext);

  React.useEffect(() => {
    getMyProfile();
  }, []);


  const getMyProfile = () => {
    axios
      .get("/profile")
      .then((res) => {
        const myProfile = res.data.profile;
        setProfile(myProfile);
        setIsLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  if (isLoading) {
    return(
      <div>Loading...</div>
    )
  } else {
    return(
      <>
      <Header />
      <div className={classes.root}>
      <AlertCard/>
        <Grid container spacing={4} justify='center'>
         
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
            <ProfileInfo profile={profile}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <MyPools/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <OtherPools/>
          </Grid>
        </Grid>
      </div>
    </>
    )
  }

};

export default Profile;
