import theme from './ThemeProvider'
import {makeStyles} from '@material-ui/core/styles';

//import assets
import banner from "../assets/WP-HeroBanner-v1.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    backgroundColor: "#2F2C3B",
    color: "white",
  },
  btnGroup: {
    margin: "0em 0em"
  },
  img: {
    maxWidth: "65vw",
    padding:"8em"
  },
  hero: {
    height: "80vh",
    backgroundPosition: "center",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign:"center"
  },
  section:{
    padding:"2em 0"
  },
  sectionTitle:{
    textAlign:"center",
    textTransform:"uppercase"
  },
}));

export {useStyles};