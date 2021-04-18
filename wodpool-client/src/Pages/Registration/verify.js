import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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

function Verify(props) {
  const classes = useStyles();
  const history = useHistory();

  const redirectToLoginPage = () => history.push("/login");

  const [formState, setFormState] = React.useState({});
  const params = new URLSearchParams(props.location.search);

  // you might want to use something like this in the registration form
  // it's a lot easier than keeping each field's state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // the password has to be STRONG
    // otherwise you'll get a 422 error
    // so that means lowercase, uppercase, specia chars and numbers
    return axios
      .post("verify", {
        id: params.get("id"),
        verificationCode: params.get("verificationCode"),
        ...formState,
      })
      .then(redirectToLoginPage)
      .catch(console.error);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Verify
        </Typography>
        <form
          className={classes.form}
          style={{ marginBottom: "4em" }}
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="newPassword"
                variant="outlined"
                required
                fullWidth
                id="newPassword"
                label="Password"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmNewPassword"
                variant="outlined"
                required
                fullWidth
                id="confirmNewPassword"
                label="Confim password"
                autoFocus
                onChange={handleChange}
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

export default Verify;
