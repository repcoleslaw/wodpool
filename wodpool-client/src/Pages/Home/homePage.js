import React from "react";
import { useHistory } from "react-router-dom";
//MUI

//Components
import Header from '../../Components/HeaderFooter/Header';
import Hero from '../../Components/Hero/Hero';
import Sponsors from "../../Components/Sponsors/Sponsors";
import HomeAddResources from "../../Components/AdditionalResources/homeAddResources";
import HomeAvailablePools from "../../Components/PoolCard/HomeAvailablePools";


//Styles
import { useStyles } from "../../util/MakeStyles";





export default function HomePage(props) {
  const classes = useStyles(props);
  const history = useHistory();


  return (
    <div className={classes.root}>
      <Header />
      <Hero/>
      <HomeAvailablePools/>
      <HomeAddResources/>
      <Sponsors/>
    </div>
  );
}
