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
    paper:{
        marginTop:theme.spacing(8),
        display:"flex"
    },
    form:{
        backgroundColor:"#1A1A1A",
        marginTop:theme.spacing(3),
        color:"black",
        padding:"2em",
        borderRadius:"0.5em",

    },
    formLabel:{
        padding:"0.5em 0em",
        color:"white",
        fontSize:"1em"
    },
    formTitle:{
        padding:"0.5em 0em",
        color:"white",
        fontSize:"1.25em",
        textDecoration:"underline",
        textAlign:"center"
    },
    gridGuide:{
        // border:"1px solid red"
    },
    subBtn:{
        marginTop:"1em",
        width:"100%",
        height:"50px",

    }

}));

function Test(){
    const classes = useStyles();
    const [hasProof, handleProof] = React.useState(false);

    return (
        <div className={classes.root}>
            Test Pages
            <Grid container justify="center" className={classes.gridGuide}>
            <form className={classes.form}>
                <Typography className={classes.formTitle}>Submit your Score</Typography>
                    <Typography
                     className={classes.formLabel}>Time</Typography>
                        <Grid container spacing={2}>
                         <Grid item xs={6}>
                            <TextField
                            variant="outlined"
                            name="minutes"
                            label="minutes"
                            type="number"
                            color="primary"
                            /> 
                            </Grid>
                            <Grid item xs={6}>
                            <TextField
                            variant="outlined"
                            name="seconds"
                            label="seconds"
                            type="number"
                            color="primary"
                            />
                            </Grid> 
                        </Grid>
                       
                    <Typography

                    className={classes.formLabel}>Video URL</Typography>

                    <Grid item xs={12} className={classes.gridGuide}>
                        <TextField
                        variant="outlined"
                        name="url"
                        label="Video URL"
                        type="string"
                        autoFocus
                        style={{width:"100%"}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                        control={
                            <Checkbox
                            value="allowExtraEmails"
                            required
                            color="primary"
                            name="hasProofOfPoints"
                            />
                        }
                        style={{ color: "grey" }}
                        label="I confirm that I have proof of my attempt if requested to provide it."
                        onChange={(e) => {
                            handleProof(!hasProof);
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.gridGuide}>
                        <Button type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.subBtn}>Submit</Button>
                    </Grid>
                    <Grid item xs={12} className={classes.gridGuide}>
                        <Button type="submit"
                        variant="contained"
                        color="secondary"
                        href="/profile"
                        className={classes.subBtn}>Back</Button>
                    </Grid>

                </form>
            </Grid>
               


            
        </div>
    )
}

export default Test
