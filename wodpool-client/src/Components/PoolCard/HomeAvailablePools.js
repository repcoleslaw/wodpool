import React from "react";
import axios from "axios";
//MUI
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

//Styles
import { useStyles } from "../../util/MakeStyles";
//Components
import usePools from "../usePools";
import PoolCard from "./PoolCard";

export default function HomeAvailablePools(props) {
  const classes = useStyles();
  const us = usePools();
 

  React.useEffect(us.fetch, [])

  return (
    <div id="pools" className={classes.section}>
      <Typography className={classes.sectionTitle} variant="h3">
        Available Pools
      </Typography>
      <Grid container spacing={4} justify="center">
          <PoolCard pools={us.pools} />
      </Grid> 
        
    </div>
  );
}
