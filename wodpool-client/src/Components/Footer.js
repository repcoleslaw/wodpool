// Footer will exist on all pages

import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import "./Footer.css";
import ThreeLogo from "../assets/3mergeLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding: "4em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
  },
  link: {
    color: "white",
  }
}));

function Copyright() {

  return (
    <Typography variant="body2" style={{color:"white"}} align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://donttalkaboutwodpool.ca">
        Wodpool
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <div className="main-footer">
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={3}>
            <div className="col">
              <h4>Connect</h4>
              <ul className="unstyled-list">
                <li><Link className={classes.link} href="https://www.instagram.com/donttalkaboutwodpool/">Instagram</Link></li>
                <li><Link className={classes.link} href="https://twitter.com/wodpool">Twitter</Link></li>
                <li><Link className={classes.link} href="https://www.facebook.com/donttalkaboutwodpool">Facebook</Link></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="col">
              <h4>Resources</h4>
              <ul className="unstyled-list">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Assumption of Risk Waiver</li>
              </ul>
            </div>
          </Grid>
        </Grid>       
        <hr style={{ marginLeft: "1em", marginRight: "1em" }} />
      </Container>

      <div className="Footer-PoweredBy">
        {" Powered by "}
        <Link to="https://www.3merge.ca/">
          {" "}
          <img
            style={{ height: "1.5em", marginLeft: "1em" }}
            src={ThreeLogo}
            alt="3merge-logo"
          />
        </Link>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
