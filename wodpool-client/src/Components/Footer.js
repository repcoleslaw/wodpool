// Footer will exist on all pages

import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import "./Footer.css";
import ThreeLogo from "../assets/3mergeLogo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Wodpool
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <div className="main-footer">
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={3}>
            <div className="col">
              <h4>Navigate</h4>
              <ul className="unstyled-list">
                <li>Home</li>
                <li>User</li>
                <li>Store</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className="col">
              <h4>Connect</h4>
              <ul className="unstyled-list">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
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
