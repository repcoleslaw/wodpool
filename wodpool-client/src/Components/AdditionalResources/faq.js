import React from 'react'
//MUI
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
// Assets
import {useStyles} from '../../util/MakeStyles'

function Faq() {
  const global = useStyles();
  return (
    <div className={global.section}>
      <Paper className={global.paper}>
      <Typography variant="h3">FAQ</Typography>
      <h1 id="submissions">Submissions</h1>
      <hr/>
      <h3>How to Submit</h3>
      <Typography variant="body1">
      Go to the Pool you have registered for to find the SUBMIT button to be redirected to the submission form. Be sure to fill in all the fields required, double check that you have completed the right workout, and ensure you have your video proof available. Once you hit submit, your <span style={{fontWeight:"bold"}}>score is final!</span> This is no-resubmission.      </Typography>

      <h3>What week am I submitting for?</h3>
      <Typography variant="body1">
      We automatically timestamp every submission that comes into our events, so we will tell you exactly which week you are submitting for.  
      </Typography>
      <h3>What if I miss a week?</h3>
      <Typography variant="body1">
      If you miss a week in a pool, you will automatically be provided a time or circuit count of 0 in that week's event. Since we measure the time stamp of your submission, we really encourage you to finish and submit your scores on time! Back-dated submissions will not be accepted.
      </Typography>
      <h3>Can I do the workout event multipe times? </h3>
      <Typography variant="body1">
      Absolutely! These events are meant to be tough, but we encourage improvement and trying them multiple times might be the best way for you to earn the best score. Just be sure to record your proof of your best attempt!
      </Typography>
      <h3>Can I resubmit my score if I do better in a different attempt? </h3>
      <Typography variant="body1">
      No. The score you choose to submit is final to the table. If you wish to do multiple attempts at the event, that's great! Be sure to upload your best result (proof included) before the deadline.
      </Typography>
      <h1 id="score">Score</h1>
      <hr/>
      <h3>How we calculate points</h3>
      <Typography variant="body1">
      Points are calculated on our side of the game, depending on how you do in each week's event. If the event was Time-based, your uploaded time will be placed with everyone elses who competed. Similarly, if the event was Circuit-based, the number of circuits completed will be compiled with all the other competitors. Your scores will be distributed based on your position to everyones submitted score. This is distributed based on a percentage distribution of the table. 
      <Typography style={{fontStyle:"italic"}} color="error">The specific number of points and model for distribution may change as we balance the game. Please check back here once more information is avaiable.</Typography>
      </Typography>
      <h3>The Leaderboard</h3>
      <Typography variant="body1">
      The Leaderboard will be updated at the end of each week. It will present the the total number of points to date by the registered competitor. 
      </Typography>
      <h3>Being "dropped" from the board</h3>
      <Typography variant="body1">
      The Leaderboard is built on the idea that top survive, and the bottom percentage of players each week will be removed from the board. In reality, all players participating in the pool will have the entire workout provided to them. At the end of each weeks event, the bottom 5% of the board will be flagged as "ineligible" to receive any winnings for participating in the pool. Final points for your participation are calculated at the end of the pool.  
      </Typography>
      <h3>Resistance Multiplier</h3>
      <Typography variant="body1">
       Pools Weekly event may have a "Resistance Multiplier" available to the competitors. These are prescribed additional resistance to the routine that are OPTIONAL for competitors to use. If you choose include the resistance, indicate as such on your submission form, make sure your video backs it up, and a score multiplier will be added to your score that week! Now, the fun part is deciding which weeks you will choose to play with the resistance. Will 10% increased resistance slow you down that you fall too far out the mulitpliers boost? You get to make that call. 
      </Typography>
      <h1 id="valid">Validation</h1>
      <hr/>
      <h3>Validating Submissions</h3>
      <Typography variant="body1">
      This is why we ask for "proof" during your submission. Per our terms of use, WODPool expects all competitors to compete honestly and provide us with video evidence of the attempts. During the competition, WODPool will look at the videos submitted to ensure the integrity is upheld. If any forms are cheating are found, or the videos are found not compliant, the competitor investigated may be removed from the pool and potentially subject to discipline. Please see our Terms of Use for more information.
      </Typography>
      <h3>Hosting your video attempts</h3>
      <Typography variant="body1">
      It is required that each competitor post or host their attempt somewhere that WODPool can validate the attempt. We use a variety of checks to ensure the video provided is valid. Some recommendations would be to place your video in a publically shared Google Drive Folder with info@wodpool.com, or on a public Instagram or Facebook post. If any forms are cheating are found, or the videos are found not compliant, the competitor investigated may be removed from the pool and potentially subject to discipline. Please see our Terms of Use for more information. 
      </Typography>
      <h1 id="winning">Winning</h1>
      <hr/>
      <Typography variant="body1">
      You've won, CONGRATULATIONS! Hoard your points for now as we release great ways to redeem your winnings. You will also be eligble for exclusive champs swag. We will be in touch.
      </Typography>
      </Paper>
    
    </div>
  )
}

export default Faq
