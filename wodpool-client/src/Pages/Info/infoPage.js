import React from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

//Assets
import { useStyles } from "../../util/MakeStyles";
//Components
import Header from "../../Components/HeaderFooter/Header";
import About from "../../Components/AdditionalResources/about";
import Faq from "../../Components/AdditionalResources/faq";
import Terminology from "../../Components/AdditionalResources/Terminology";

const InfoPage = (props) => {
  const global = useStyles();

  return (
    <>
      <Header />
      <div className={global.root}>
        <div className={global.section}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <About />
            </Grid>
            <Grid item xs={12}>
              <Faq />
            </Grid>
            <Grid item xs={12}>
              <Terminology />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
