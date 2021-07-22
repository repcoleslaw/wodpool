import React from 'react'

// use this page to sketch out the other shit that you get confused in.

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        margin:"1em",
    },
}));

function Test(){
    const classes = useStyles();
    const [hasProof, handleProof] = React.useState(false);

    return (
        <div className={classes.root}>
            Test Pages

            
        </div>
    )
}

export default Test
