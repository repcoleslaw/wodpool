import React from "react";
import axios from "axios";

//MUI
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';

//import usepool
import usePools from "../../Components/usePools";
//components
import Header from "../../Components/HeaderFooter/Header";

//assets
import { useStyles } from "../../util/MakeStyles";
import {submitStyles} from './SubmitStyle';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: "1em",
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//   },
//   form: {
//     backgroundColor: "#1A1A1A",
//     marginTop: theme.spacing(3),
//     color: "black",
//     padding: "2em",
//     borderRadius: "0.5em",
//   },
//   formLabel: {
//     padding: "0.5em 0em",
//     color: "white",
//     fontSize: "1em",
//   },
//   formTest: {
//     color: "blue",
//   },
//   formTitle: {
//     padding: "0.5em 0em",
//     color: "white",
//     fontSize: "1.25em",
//     textDecoration: "underline",
//     textAlign: "center",
//   },
//   gridGuide: {
//     // border:"1px solid red"
//   },
//   subBtn: {
//     marginTop: "1em",
//     width: "100%",
//     height: "50px",
//   },
// }));

function ScoreSubmit(props) {

  const classes = submitStyles();
  const global = useStyles();
  const id = props.match.params.id;
  const [formState, setFormState] = React.useState({});
  // const [selectedTime, handleTimeChange] = React.useState(new Date());
  const [hasProof, handleProof] = React.useState(false);
  console.log(id)
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var mins = formState.minutes;
    var secs = formState.seconds;
    var duration = mins * 60 + secs;


    return (
      axios
        .post(`/score`, {
          // ...formState,
          // selectedTime,
          url: formState.url,
          duration,
          hasProofOfPoints: hasProof,
          id: id,
        })
        //on success
        .then(() => {
          alert("UPLOAD SUCCESSFUL")
          console.log({
            url:formState.url,
            id: id
          })
        })
        // on fail
        .catch((err) => {
          alert(err.response.data.message);
          console.log({
            // ...formState,
            // selectedTime,
            url: formState.url,
            duration,
            hasProofOfPoints: hasProof,
            id: id,
          });
        })
    );
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container justify="center" >
          <Paper className={classes.paper}>
          <form className={classes.form}>
            <Typography variant="h5" className={classes.formTitle}>
              Submit your Score
            </Typography>
            <Typography>You are submitting for Pool {id}. We calculate the time of your submission and assign it to the appropriate Week. For more information, check out our FAQ.</Typography>
            <Typography variant="subtitle1" className={classes.formLabel}>Time</Typography>
            <Grid container  spacing={4}>
              <Grid item xs={6}>
              <TextField
                onChange={handlechange}
                variant="outlined"
                name="minutes"
                label="minutes"
                type="number"
                style={{width:"100%"}}
                inputProps={{ className: classes.formField }}
              />
              </Grid>
              <Grid item xs={6}>
              <TextField
                onChange={handlechange}
                variant="outlined"
                name="seconds"
                label="seconds"
                type="number"
                color="primary"
                style={{width:"100%"}}
                inputProps={{ className: classes.formField }}
              />
              </Grid>       
            </Grid>
            <Typography variant="subtitle1"className={classes.formLabel}>Video URL</Typography>
            <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                onChange={handlechange}
                variant="outlined"
                name="url"
                label="Video URL"
                type="string"
                autoFocus
                style={{ width: "100%" }}
                inputProps={{ className: classes.formField }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="proof"
                    required
                    color="primary"
                    name="hasProofOfPoints"
                  />
                }
                style={{ color: "grey" }}
                label="I confirm that I have proof of my attempt if requested to provide it."
                onChange={(e) => {
                  handleProof(!hasProof);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.subBtn}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button
                variant="contained"
                color="secondary"
                href="/profile"
                className={classes.subBtn}
              >
                Back
              </Button>
            </Grid>
            </Grid>
         
          </form>
          </Paper>
        
        </Grid>
      </div>
    </>
  );
}

export default ScoreSubmit;
