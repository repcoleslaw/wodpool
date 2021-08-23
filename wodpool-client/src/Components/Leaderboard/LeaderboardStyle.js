import {makeStyles} from '@material-ui/core/styles';

const leaderboardStyles =  makeStyles((theme) => ({
  table : {
    width:"100%"
  },

  th25:{
    background:"rgba(0,0,0,0.8)",
    width:"25%",

  },
  th50:{
    background:"rgba(0,0,0,0.8)",
    width:"50%",

  },
  thBtn:{
    borderStyle:"none",
    fontWeight:"bold",
    background:"none",
    color:"white",
    width:"100%"
  },
  tRow:{
    background:"rgba(0,0,0,0.3)",
  },

  tDataAlignCenter:{
    padding:"0.5em",
    textAlign:"center"
  },
  tDataAlignLeft:{
    padding:"0.5em",
    textAlign:"Left"
  },

}));
    

export {leaderboardStyles};