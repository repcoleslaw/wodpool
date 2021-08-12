import React from "react";
import axios from "axios";
//MUI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

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
        <PoolCard pools={us.pools} />
    </div>
  );
}
