// Footer will exist on all pages

import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import "./Footer.css"
//import assets
import fbWhite from '../Assets/SocialMedia/facebook-7-128.png'
import twWhite from '../Assets/SocialMedia/twitter-4-128.png'
import igWhite from '../Assets/SocialMedia/instagram-4-128.png'
import ytWhite from '../Assets/SocialMedia/yt_icon_mono_dark.png'


function Copyright() {
  return (
    <Typography className="copyright" variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.wodpool.com/">
        WODPool
      </Link>{' '}
      {new Date().getFullYear()}
      {'- All Rights Reserved.'}
    </Typography>
  );
}

function Footer() {
  return (
    <div className="Footer-Cont">
      <h4 style={{color:"white"}}>CONNECT</h4>
      <div className="Footer-Socials">
        <Link to="/"><img src={fbWhite} alt="fb-logo"/></Link>
        <Link to="/"><img src={twWhite} alt="tw-logo"/></Link>
        <Link to="/"><img src={igWhite} alt="ig-logo"/></Link>
        <Link to="/"><img src={ytWhite} alt="yt-logo"/></Link>
      </div>
      <Copyright  />
      <hr className="Footer-rule"/>


      <div className="Footer-Pages" >
        <Link style={{margin:"0 1em"}}to="/">Privacy Policy</Link>
        <Link style={{margin:"0 1em"}} to="/">Terms and Conditions</Link>
      </div>
      <div className="Footer-PoweredBy">
        {"Powered by "}
        <Link to="https://www.3merge.ca/">3Merge q3-api Framework</Link>
        <br/>
        <img style={{margin:"2em 0"}}src="" alt="3merge-logo"/>
      </div>
    </div>
  )
}

export default Footer
