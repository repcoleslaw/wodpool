import React from "react";
import axios from "axios";

//mui
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { TimePicker } from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//import usepool
import usePools from "../../Components/usePools";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1em",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    padding: "3em",
    borderRadius: "1em",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

function ScoreSubmit({ location: { search } }) {
  const id = new URLSearchParams(search).get("id");

  const classes = useStyles();
  const [formState, setFormState] = React.useState({});
  const [selectedTime, handleTimeChange] = React.useState(new Date());
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

    // collection
    // ID of the document
    // subdocument

    return (
      axios
        .post(`/score`, {
          ...formState,
          selectedTime,
          hasProofOfPoints: hasProof,
          id,
        })
        //on success
        .then(() => alert("UPLOAD SUCCESSFUL"))
        // on fail
        .catch((err) => {
          alert(err.response.data.message);
        })
    );
  };

  return (
    <div className={classes.paper}>
      <Grid container>
        <Grid item>
          <Typography component="h2" variant="h5" color="textSecondary">
            Submit Score
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="duration"
                  variant="outlined"
                  required
                  fullWidth
                  id="duration"
                  label="duration"
                  type="number"
                  autoFocus
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      required
                      color="primary"
                      name="hasProofOfPoints"
                    />
                  }
                  style={{ color: "black" }}
                  label="I confirm that I have proof of my attempt if requested to provide it."
                  onChange={(e) => {
                    handleProof(!hasProof);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="url"
                  variant="outlined"
                  required
                  fullWidth
                  id="url"
                  label="Video upload location"
                  autoFocus
                  onChange={handlechange}
                />
              </Grid>
            </Grid>
            <button type="submit">Submit</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default ScoreSubmit;
