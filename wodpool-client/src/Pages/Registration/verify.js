import React from 'react'
//signup card resides on landingPage.js



import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Verify() {
  const classes = useStyles();

  // Establish Required hooks
  const [vercode, setVercode] = React.useState("");
 

  //Optional Hooks

  //data bind
  var myurl = 'myurl'
  var bodyFormData = new FormData();
  bodyFormData.append("vercode", {vercode})

  //handle onSubmit
 
  const handleSubmit = (event) => {
    console.log(bodyFormData);
    axios({
      method: "post",
      url: `${myurl}`,
      data: bodyFormData,
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    event.preventDefault();
  };
  
  return (
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Verify
        </Typography>
        <form className={classes.form}style={{marginBottom:"4em"}} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="verify"
                variant="outlined"
                required
                fullWidth
                id="verify"
                label="Verification Code"
                autoFocus
                onChange = {e=>setVercode(e.target.value)}
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
  )
}

export default Verify
