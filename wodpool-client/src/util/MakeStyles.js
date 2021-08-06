import {makeStyles} from '@material-ui/core/styles';

//import assets
import banner from "../assets/WP-HeroBanner-v1.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#2F2C3B",
    color: "white",
    padding:"0.5em"
  },
    btnGroup: {
      margin: "0em 0em"
    },
    btnStyle1: {
      width:"100%",
    },
  img: {
    maxWidth: "65vw",
    padding:"8em"
  },
  hero: {
    height: "85vh",
    backgroundPosition: "center",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign:"center"
  },
  section:{
    padding:"2em"
  },
  subsection:{
    padding:"2em 0em"
  },
  sectionTitle:{
    textAlign:"center",
    textTransform:"uppercase",
    margin:"1em 0em"
  },
  table: {
    minWidth: 700,
    color:"black"
  },
  tableRow:{
      color:"black"
  }
}));

export {useStyles};