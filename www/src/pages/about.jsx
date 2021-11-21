import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Tab,
} from '@material-ui/core';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Sponsors } from '../components';
import useSponsorStyle from '../components/Sponsors/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    '& [role="tabpanel"]': {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),

      '& h2': {
        color: theme.palette.secondary.main,
        fontSize: theme.typography.overline.fontSize,
        textTransform: 'uppercase',
        marginTop: theme.spacing(2),
      },
    },
  },
}));

// no use of react-i18next because it's too much content
// should use a CMS down the road
const About = () => {
  const [value, setValue] = React.useState(0);
  const cls = useStyle();
  const cls2 = useSponsorStyle();

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box my={4} className={cls.root}>
      <Container component="main">
        <Box mb={2}>
          <Typography variant="h1" className={cls2.title}>
            <span>About</span>
          </Typography>
        </Box>
        <Typography>
          WODPool is born of the idea combining the
          conditioning training of the Work Out of the Day
          and the euphoria of competition in a "Deadpool"
          style leaderboard. Founded during the depths of
          the 2020 pandemic, the need for more ways to
          engage with your fitness community remotely became
          the driving force to gamify our conditioning
          workouts. We hope that you find the games
          competitive, hard work, and you have fun along the
          way!
        </Typography>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab value={0} label="Submissions" />
            <Tab value={1} label="Scoring" />
            <Tab value={2} label="Validation" />
            <Tab value={3} label="Winning" />
          </TabList>
          <TabPanel value={0}>
            <Typography>
              Go to the Pool you have registered for to find
              the SUBMIT button to be redirected to the
              submission form. Be sure to fill in all the
              fields required, double check that you have
              completed the right workout, and ensure you
              have your video proof available. Once you hit
              submit, your score is final! This is
              no-resubmission.
            </Typography>
            <h2>What week am I submitting for?</h2>
            <Typography>
              We automatically timestamp every submission
              that comes into our events, so we will tell
              you exactly which week you are submitting for.
            </Typography>
            <h2>What if I miss a week?</h2>
            <Typography>
              If you miss a week in a pool, you will
              automatically be provided a time or circuit
              count of 0 in that week's event. Since we
              measure the time stamp of your submission, we
              really encourage you to finish and submit your
              scores on time! Back-dated submissions will
              not be accepted.
            </Typography>
            <h2>
              Can I do the workout event multipe times?
            </h2>
            <Typography>
              Absolutely! These events are meant to be
              tough, but we encourage improvement and trying
              them multiple times might be the best way for
              you to earn the best score. Just be sure to
              record your proof of your best attempt!
            </Typography>
            <h2>
              Can I resubmit my score if I do better in a
              different attempt?
            </h2>
            <Typography>
              No. The score you choose to submit is final to
              the table. If you wish to do multiple attempts
              at the event, that's great! Be sure to upload
              your best result (proof included) before the
              deadline.
            </Typography>
          </TabPanel>
          <TabPanel value={1}>
            <Typography>
              Points are calculated on our side of the game,
              depending on how you do in each week's event.
              If the event was Time-based, your uploaded
              time will be placed with everyone elses who
              competed. Similarly, if the event was
              Circuit-based, the number of circuits
              completed will be compiled with all the other
              competitors. Your scores will be distributed
              based on your position to everyones submitted
              score. This is distributed based on a
              percentage distribution of the table.
              <Typography>
                The specific number of points and model for
                distribution may change as we balance the
                game. Please check back here once more
                information is avaiable.
              </Typography>
            </Typography>
            <h2>The Leaderboard</h2>
            <Typography>
              The Leaderboard will be updated at the end of
              each week. It will present the the total
              number of points to date by the registered
              competitor.
            </Typography>
            <h2>Being "dropped" from the board</h2>
            <Typography>
              The Leaderboard is built on the idea that top
              survive, and the bottom percentage of players
              each week will be removed from the board. In
              reality, all players participating in the pool
              will have the entire workout provided to them.
              At the end of each weeks event, the bottom 5%
              of the board will be flagged as "ineligible"
              to receive any winnings for participating in
              the pool. Final points for your participation
              are calculated at the end of the pool.
            </Typography>
            <h2>Resistance Multiplier</h2>
            <Typography>
              Pools Weekly event may have a "Resistance
              Multiplier" available to the competitors.
              These are prescribed additional resistance to
              the routine that are OPTIONAL for competitors
              to use. If you choose include the resistance,
              indicate as such on your submission form, make
              sure your video backs it up, and a score
              multiplier will be added to your score that
              week! Now, the fun part is deciding which
              weeks you will choose to play with the
              resistance. Will 10% increased resistance slow
              you down that you fall too far out the
              mulitpliers boost? You get to make that call.
            </Typography>
          </TabPanel>
          <TabPanel value={2}>
            <Typography>
              This is why we ask for "proof" during your
              submission. Per our terms of use, WODPool
              expects all competitors to compete honestly
              and provide us with video evidence of the
              attempts. During the competition, WODPool will
              look at the videos submitted to ensure the
              integrity is upheld. If any forms are cheating
              are found, or the videos are found not
              compliant, the competitor investigated may be
              removed from the pool and potentially subject
              to discipline. Please see our Terms of Use for
              more information.
            </Typography>
            <h2>Hosting your video attempts</h2>
            <Typography>
              It is required that each competitor post or
              host their attempt somewhere that WODPool can
              validate the attempt. We use a variety of
              checks to ensure the video provided is valid.
              Some recommendations would be to place your
              video in a publically shared Google Drive
              Folder with info@wodpool.com, or on a public
              Instagram or Facebook post. If any forms are
              cheating are found, or the videos are found
              not compliant, the competitor investigated may
              be removed from the pool and potentially
              subject to discipline. Please see our Terms of
              Use for more information.
            </Typography>
          </TabPanel>
          <TabPanel value={3}>
            <Typography>
              You've won, CONGRATULATIONS! Hoard your points
              for now as we release great ways to redeem
              your winnings. You will also be eligble for
              exclusive champs swag. We will be in touch.
            </Typography>
          </TabPanel>
        </TabContext>
        <Box mt={3}>
          <Sponsors />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
