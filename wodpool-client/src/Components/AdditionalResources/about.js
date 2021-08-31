import React from 'react'
//MUI
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

// Assets
import {useStyles} from '../../util/MakeStyles'

function About() {
  const global = useStyles();
  return (
    <div className={global.section}>
      <Paper className={global.paper}>
      <Typography variant="h3">About WODPool</Typography>
      <div className={global.subsection}>
       <h1>Story</h1>
      <Typography variant="body1">
        WODPool is born of the idea combining the conditioning training of the Work Out of the Day and the euphoria of competition in a "Deadpool" style leaderboard. Founded during the depths of the 2020 pandemic, the need for more ways to engage with your fitness community remotely became the driving force to gamify our conditioning workouts. We hope that you find the games competitive, hard work, and you have fun along the way!
       </Typography>
       <h1>Quick Links</h1>
      </div>
       <Button href="#submissions">Submissions</Button>
       <Button href="#score">Scoring</Button>
       <Button href="#valid">Validation</Button>
       <Button href="#winning">Winning</Button>
      </Paper>
      
    </div>
  )
}

export default About
