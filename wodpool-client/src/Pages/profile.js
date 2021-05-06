import React from "react";
import { AuthenticationContext } from "../Components/AuthenticationContext";
import Header from "../Components/HeaderFooter/Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';
import PoolCard from '../Components/PoolCard/PoolCard';


//import assets
import placeholder from "../assets/placeholder.png";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    backgroundColor: "rgba(0,0,0,0.25)",
    color: "white",
  },
  img: {
    height: "40px",
    width: "40px",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [profileData, setProfileData] = React.useState("");
  // set all pool data
  const [pools, getPools] = React.useState("");
  // set my pool data

  const auth = React.useContext(AuthenticationContext);

  React.useEffect (() => {
    getMyProfile();
    getAllPools();
    assignPools(pools, profileData);
  }, []);

  const getMyProfile = () => {
    axios.get("/profile")
    .then((res) =>{
      const myProfile = res.data.profile;
      setProfileData(myProfile);
      console.log(myProfile)
    })
    .catch(error => console.error(`Error: ${error}`))
  }

  const getAllPools = () => {
    axios.get("/pools")
      .then((res) => {
        const allPools = res.data.pools;
        getPools(allPools);
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  const assignPools = (pools, profileData) => {
    console.log(pools)
   
  }



  return (
    <>
      <Header />
      <div className={classes.root}>
        {/* Put Profile Banner */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Welcome back,{auth.profile.firstName} </h2>
              {auth?.profile
                ? `Hey, ${auth.profile.firstName}, `
                : "Not logged in"}
            </Paper>
          </Grid>

          {/* Put Pools that I am registered for Here */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Your Pools</h2>
              {auth?.profile
                ? `Hey, ${auth.profile.firstName}`
                : "Not logged in"}
            </Paper>
          </Grid>
          {/* Available Pools */}
          <Grid item xs={12}>

            
            <Paper className={classes.paper}>

            <h2>Available Pools</h2>
            <hr/>
            <PoolCard pools={pools} key={pools.id}/>

             
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
