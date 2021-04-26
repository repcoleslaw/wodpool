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

// styles are global scoped to all this document.
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"#eeeeee",
    padding:"3em",
    borderRadius:"1em"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#B00909",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3), 

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#B00909"
  },
}));

function Registration() {
  const classes = useStyles();
  const history = useHistory();

  const redirectToThankYouPage = () => history.push("/thanks");
  const redirectToLogin = () => history.push("/login");

  // Establish Required hooks
  const [formState, setFormState] = React.useState({});
  const [isError, setIsError] = React.useState(false)
  const [errors, getErrors] = React.useState('null');

  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [acceptEmails, setAcceptEmails] = React.useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]:value,
    }));
  };
  
  const handleSubmit = (event) => {
    // need to do this earlier in the callback
    // some frameworks use a "synthesized" event
    // so the preventDefault is not guarenteed to still exist later on in the stack
    event.preventDefault();


    return axios
      .post(`/q3-api-users`, {
        // just send a basic object to the API
        __t: "competitors",
        role: "Competitor",
        ...formState,
        acceptTerms,
      })
      // on success
      .then(redirectToThankYouPage)
      // catch errors on failure.
      .catch((err) => {
        setIsError(true);
        getErrors(err.response.data);
        console.log(errors)

      });
  };

  // stupid little error helper. 
  let emailHelper = '';
  if (errors.errors?.email) {
    emailHelper = errors.errors.email.msg
  };

  return (

    <Container component="main" style={{marginBottom:"4em"}} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>

        <Typography component="h1" variant="h5" style={{color:"black"}}>
          Register
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                error={Boolean(errors.errors?.firstName)}
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                error={Boolean(errors.errors?.lastName)}
                autoComplete="lname"
                onChange={handleChange}
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
                error={Boolean(errors.errors?.email)}
                helperText={emailHelper}
                onChange={handleChange}
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
                error={Boolean(errors.errors?.handle)}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" required color="primary" />
                }
                style={{color:"black"}}
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
                style={{color:"black"}}
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
              <Link onClick={redirectToLogin} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Registration;
