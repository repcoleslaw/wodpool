import {makeStyles} from '@material-ui/core/styles';

const submitStyles =  makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    padding: "3em",
    borderRadius: "1em",
  },
  form:{
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color:"black",
  },
  formField: {
    color: "black",
  },
  formTitle: {
    padding: "0.5em 0em",
    color: "black",
    textAlign: "center",
  },
  formLabel:{
    fontWeight:"bold",
    padding:"1em 0"
  },
  subBtn:{
    width:"100%"
  }
}));
    

export {submitStyles};