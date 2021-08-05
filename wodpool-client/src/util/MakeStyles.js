import theme from './ThemeProvider'
import {makeStyles} from '@material-ui/core/styles';

//import assets
import banner from "../assets/WP-HeroBanner-v1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    margin: "2em 0"
  },
  btn: {
    margin: "1em 0em"
  },
  img: {
    maxWidth: "65vw",
    padding: "4em 0",
  },
  hero: {
    height: "40vh",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
}));

export {useStyles};