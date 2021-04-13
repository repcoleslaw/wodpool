// Footer will exist on all pages

import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import './Footer.css';
import ThreeLogo from '../assets/3mergeLogo.png';

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
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Navigate</h4>
            <ul className="unstyled-list">
              <li>Home</li>
              <li>User</li>
              <li>Store</li>
            </ul>
          </div>
          <div className="col">
            <h4>Connect</h4>
            <ul className="unstyled-list">
              <li>fb</li>
              <li>ig</li>
              <li>tw</li>
            </ul>
          </div>
          <div className="col">
            <h4>Resources</h4>
            <ul className="unstyled-list">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Assumption of Risk Waiver</li>
            </ul>
          </div>
        </div>
        <hr style={{marginLeft:"5em", marginRight:"5em"}}/>
      </div>
      <div className="Footer-PoweredBy">

        {" Powered by "}
        <Link to="https://www.3merge.ca/">      <img style={{ height:"1.5em", marginLeft:"1em" }} src={ThreeLogo} alt="3merge-logo" /></Link>
        
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
