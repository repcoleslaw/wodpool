import {makeStyles} from '@material-ui/core/styles';

const myPoolStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      cardBase :{
          background:"rgba(0,0,0,0.3)",
          padding:"1em",
          margin:"1em"
      },
      pgBtn:{
          width:"100%"
      }
}));

export {myPoolStyles};