import {makeStyles} from '@material-ui/core/styles';

const alertStyle = makeStyles((theme) => ({
    container:{
        background:"rgba(255,0,0,0.5)",
        color:"#eee",
        borderRadius:"5px",
        border:"2px solid rgba(255,0,0,0.7)",
        margin:".5em",
        padding:"0em 1em"
    }
}));

export {alertStyle}