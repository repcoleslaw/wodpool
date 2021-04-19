import React from 'react'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Home page will handle all the pools available to the user.
// This will also be the hub to which future features will click into
// ie - gym finder, tips, links back to the store on the godaddy site, etc.

import wordmark from '../assets/whitewordmark.png'

import PoolCard from '../Components/PoolCard.js';


function homePage() {
  return (
    <div>
      <Grid container>
        <img src={wordmark} alt="wodpool" />
      </Grid>
      <Grid container xs={12}>
       <PoolCard/>
      </Grid>

    </div>
  )
}

export default homePage
