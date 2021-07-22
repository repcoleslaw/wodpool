// Login card resides on landingPage.js
// both login and signup will be on same page.

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../Components/AuthenticationContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    padding: "3em",
    borderRadius: "1em",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#B00909",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color:"black",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#B00909",
  },
  input:{
    color:"#000"
  }

}));

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { authenticate } = React.useContext(AuthenticationContext);
  const [isError, setIsError] = React.useState(false)
  const [errors, getErrors] = React.useState('null');

  const handleSubmit = (event) => {
    event.preventDefault();
    return authenticate({
      email,
      password,
    }).catch((err)=>{
      setIsError(true);
      getErrors(err.response.data);
      console.log(errors);
    });
  };

    // stupid little error helper. 
    let emailHelper = '';
    if (errors.errors?.email) {
      emailHelper = "Please Enter your Email"
    };
    let passHelper = '';
    if (errors.errors?.password) {
      passHelper = "Incorrect Password, please try again."
    };

  const redirectToRegistration = () => history.push("/registration");
  const redirectToForgotPass = () => history.push("/forgotpassword");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color:"#000"}}>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            inputProps={{
              className: classes.input
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.errors?.email)}
            helperText={emailHelper}
            className={classes.input}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.errors?.password)}
            helperText={passHelper}
            inputProps={{
              className: classes.input
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={redirectToForgotPass} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={redirectToRegistration} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
