import {makeStyles} from '@material-ui/core/styles';

//import assets
import banner from "../assets/WP-HeroBanner-v1.jpg"

const useStyles = makeStyles((theme) => ({
  ///GENERAL
  root: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "white",
    padding:"1em"
  },
    btnGroup: {
      margin: "0em 0em"
    },
    btnGroup1: {
      margin:"1em 0",
      padding:"1em 0"
    },
    btnStyle1: {
      width:"100%",
    },
  img: {
    maxWidth: "65vw",
    padding:"8em"
  },
  sponsorImg:{
    width:'100%',
    padding:'2em'
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
  standalone:{
    padding:"2em",
    textAlign:"center"
  },
  subsection:{
    padding:"2em 0em"
  },
  sectionTitle:{
    textAlign:"center",
    textTransform:"uppercase",
    margin:"1em 0em"
  },
  // LEADERBOARD
  table: {
    minWidth: 700,
    color:"black"
  },
  tableRow:{
      color:"black"
  },
  accordionBase:{
    backgroundColor:"rgba(0,0,0,.3)",
  },
  // CARD MEDIA
  homePoolsRoot:{
    display:"flex",
  },
  cardBase:{
    maxWidth:345,
    width:"100%",
    height:400,
    backgroundColor:"rgba(0,0,0,.5)",
  },
  cardMedia:{
    height:140,
  },
  cardActionArea:{
    height:350,
  },
  cardAction:{
    bottom:0,
  },
  cardNarrow:{
    backgroundColor:"rgba(0,0,0,.5)",
  },
  //ICONS
  infoIcon:{
    height:"0.65em",
    width:"auto",
    margin:"0.75em 0.5em 0 0"
  },
  premiumPool:{
    background:"#92CB49",
    padding:"0.75em",
    fontWeight:"bold",
    margin:"1em 0em",
  }
}));

export {useStyles};