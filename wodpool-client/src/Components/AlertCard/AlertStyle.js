import {makeStyles} from '@material-ui/core/styles';

const alertStyle = makeStyles((theme) => ({
    container:{
        flexGrow: 1,
        background:"rgba(255,0,0,0.5)",
        color:"#eee",
        borderRadius:"5px",
        border:"2px solid rgba(255,0,0,0.7)",
        margin:".5em 0em"

    }
}));

export {alertStyle}