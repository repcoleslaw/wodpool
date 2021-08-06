import React from "react";
import { useHistory } from "react-router-dom";
import Header from '../../Components/HeaderFooter/Header';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
//components
import Hero from '../../Components/Hero/Hero';

//
import wordmark from "../../assets/WP-Wordmark.png";
import { ButtonGroup, Typography } from "@material-ui/core";

//testing styleshook
import { useStyles } from "../../util/MakeStyles";

//get pool data
import usePools from "../../Components/usePools";
import PoolCard from '../../Components/PoolCard/PoolCard';


export default function HomePage(props) {
  const classes = useStyles(props);
  const history = useHistory();


  const AvailPools = () => {
    const us = usePools();
    const classes = useStyles();
    React.useEffect(() => {
      us.fetch();
    }, []);
    console.log(us.fetch)
  
    return (
      <div id="pools"className={classes.section}>
        <Typography className={classes.sectionTitle}variant="h3">
        Available Pools
        </Typography>
        <Paper className={classes.paper}>
          <PoolCard pools={us.pools} />
       </Paper>
       </div>
    );
  };

  const AddResources = () => {
    return(
      <div className={classes.section}>
      <Typography variant="h3" className={classes.sectionTitle}>
        Additional Resources
      </Typography>
    </div>
    )
   ;
  };
  


  return (
    <div className={classes.root}>
      <Header />
      {/* Hero Image - Full screen on mobile, 60% on Monitor/Tablet */}
      <Hero/>
      {/* Available Pools Grid */}
      <AvailPools/>
      {/* Additional Resources */}
      <AddResources/>
    </div>
  );
}
