import React from "react";
import axios from "axios";

//mui
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

//import usepool
import usePools from "../../Components/usePools";
//components
import Header from "../../Components/HeaderFooter/Header";

const useStyles = makeStyles((theme) => ({
  root:{
      flexGrow:1,
      margin:"1em",
  },
  paper:{
      marginTop:theme.spacing(8),
      display:"flex"
  },
  form:{
      backgroundColor:"#1A1A1A",
      marginTop:theme.spacing(3),
      color:"black",
      padding:"2em",
      borderRadius:"0.5em",

  },
  formLabel:{
      padding:"0.5em 0em",
      color:"white",
      fontSize:"1em"
  },
  formTest:{
    color:"blue"
  },
  formTitle:{
      padding:"0.5em 0em",
      color:"white",
      fontSize:"1.25em",
      textDecoration:"underline",
      textAlign:"center"
  },
  gridGuide:{
      // border:"1px solid red"
  },
  subBtn:{
      marginTop:"1em",
      width:"100%",
      height:"50px",

  }

}));

function ScoreSubmit({ location: { search } }) {
  const id = new URLSearchParams(search).get("id");
  console.log(id)

  const classes = useStyles();
  const [formState, setFormState] = React.useState({});
  // const [selectedTime, handleTimeChange] = React.useState(new Date());
  const [hasProof, handleProof] = React.useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var mins = formState.minutes
    var secs = formState.seconds
    var duration = (mins*60) + secs;
    console.log(duration);

    return (
      axios
        .post(`/score`, {
          // ...formState,
          // selectedTime,
          url:formState.url,
          duration,
          hasProofOfPoints: hasProof,
          id,
        })
        //on success
        .then(() => alert("UPLOAD SUCCESSFUL"))
        // on fail
        .catch((err) => {
          alert(err.response.data.message);
          console.log({
            // ...formState,
            // selectedTime,
            url:formState.url,
            duration,
            hasProofOfPoints: hasProof,
            id,
          })
        })
    );
  };

  return (
    <div className={classes.root}>

    Test Pages
    <Grid container justify="center" className={classes.gridGuide}>
    <form className={classes.form}>
        <Typography className={classes.formTitle}>Submit your Score</Typography>
            <Typography className={classes.formLabel}>Time</Typography>
                <Grid container spacing={2}>
                 <Grid item xs={6}>
                    <TextField
                    onChange={handlechange}
                    variant="outlined"
                    name="minutes"
                    label="minutes"
                    type="number"
                    inputProps={{className:classes.formTest}}
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
                    />
                    </Grid> 
                </Grid>
               
            <Typography

            className={classes.formLabel}>Video URL</Typography>

            <Grid item xs={12} className={classes.gridGuide}>
                <TextField
                onChange={handlechange}
                variant="outlined"
                name="url"
                label="Video URL"
                type="string"
                autoFocus
                style={{width:"100%"}}
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
            <Grid item xs={12} className={classes.gridGuide}>
                <Button type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.subBtn}>Submit</Button>
            </Grid>
            <Grid item xs={12} className={classes.gridGuide}>
                <Button
                variant="contained"
                color="secondary"
                href="/profile"
                className={classes.subBtn}>Back</Button>
            </Grid>

        </form>
    </Grid>
</div>
  );
}

export default ScoreSubmit;
