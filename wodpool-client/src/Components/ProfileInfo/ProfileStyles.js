import {makeStyles} from '@material-ui/core/styles';

const profileStyle = makeStyles((theme) => ({
    container:{
        color:"#fff",
        flexGrow: 1,
        padding:"1em"
    },
    edtBtn:{
        width:"25%"
    },
    paper:{
        background:"rgba(0,0,0,0.25)",
        height:"100%"
    },
    content:{
        padding:"1em"
    }
}));

export {profileStyle}