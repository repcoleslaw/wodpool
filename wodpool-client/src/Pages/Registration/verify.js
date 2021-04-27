import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#B00909",
  },
}));

function Verify(props) {
  const classes = useStyles();
  const history = useHistory();

  const redirectToLoginPage = () => history.push("/login");

  const [formState, setFormState] = React.useState({});
  const [isError, setIsError] = React.useState(false);
  const [errors, getErrors] = React.useState("null");
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
      .catch((err) => {
        // check general
        console.log(err);
        setIsError(true);
        getErrors(err.response.data);
        console.log(errors);
      });
  };

  // stupid little error helper.
  let errorHelper = "";
  let errorHelper1 = "";
  let errorHelper2 = "";
  let password1 = "";
  let password2 = "";
  password1 = formState.newPassword;
  password2 = formState.confirmNewPassword;

  if (isError) {
    // Password 1
    //null check
    if (!password1) {
      errorHelper1 = "This field cannot be empty";
    }
    // length check
    else if (password1.length < 8) {
      errorHelper1 = "The password provided is not long enough.";
    }
    // capital letters character
    else if (!password1.match(/[A-Z]/)) {
      errorHelper1 = "The password provide does not have Capital Letters";
    }
    // Numbers
    else if (!password1.match(/[0-9]/)) {
      errorHelper1 = "The password provide does not have any Numbers";
    }
    // Special character
    else if (!password1.match(/[!@#$%^&*()?<>]/)) {
      errorHelper1 =
        "The password provide does not have any Special Characters ( e.g. @#$% )";
    } else if (!password2) {
      errorHelper2 = "This field cannot be empty";
    }
    // Passwords Match?
    else if (password1 !== password2) {
      errorHelper1 = "These passwords do not match.";
      errorHelper2 = "These passwords do not match.";
    }
  }

  if (errors.statusCode === 403) {
    errorHelper = "Timed out, get a new verification code.";
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ color: "black" }}>
          Account Verified!
        </Typography>
        <p style={{ color: "red" }}>{errorHelper}</p>
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
                error={Boolean(errors)}
                helperText={errorHelper1}
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
                error={Boolean(errors)}
                helperText={errorHelper2}
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
            Set Password
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Verify;
