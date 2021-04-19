import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup() {
  const classes = useStyles();
  const history = useHistory();

  const redirectToThankYouPage = () => history.push("/thanks");

  // Establish Required hooks
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [handle, setHandle] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [acceptTerms, setAcceptTerms] = React.useState("false");
  const [acceptEmails, setAcceptEmails] = React.useState("false");

  const handleSubmit = (event) => {
    // need to do this earlier in the callback
    // some frameworks use a "synthesized" event
    // so the preventDefault is not guarenteed to still exist later on in the stack
    event.preventDefault();

    return axios
      .post(`/q3-api-users`, {
        // just send a basic object to the API
        // if you use FormData, then you need to also send something called MultiPart headers
        // and that just is a little overkill for this type of app
        // typically, I'd only do that for file sending
        __t: "competitors",
        role: "Competitor",
        firstName,
        lastName,
        email,
        handle,
      })
      .then(redirectToThankYouPage)
      .catch(console.error);
  };

  return (
    <Container component="main" style={{backgroundColor:"grey", borderRadius:".5em", marginBottom:"4em"}} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="handle"
                label="Handle"
                type="handle"
                id="handle"
                onChange={(e) => setHandle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" required color="primary" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
                onChange={(e) => {
                  setAcceptEmails(!acceptEmails);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="termsAccepted" required color="primary" />
                }
                label="I accept the Terms of Service, Privacy Policy, and Assumption of Risk Waiver."
                onChange={(e) => {
                  setAcceptTerms(!acceptTerms);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
