import React from 'react'
import {Link} from 'react-router-dom'
//MUI
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
//ASSETS

import {myPoolStyles} from './MyPoolStyles'


function JoinedPool(props) {

    const classes = myPoolStyles();
    const {pools} = props;

    if (pools.length > 0) {
        return pools.map((pool, index) =>{
            return(
                <Card key={index} className={classes.cardBase}>
                    <Grid container>
                     <Grid item xs={12} sm={8}>
                        <Typography variant="h5">{pool.name}</Typography>
                     </Grid>
                     <Grid item xs={12} sm={4}>
                        <Button className={classes.pgBtn}component={Link} variant="outlined" color="primary" to={`/pools/${pool.id}`}>Go to Pool</Button>
                     </Grid>
                    </Grid>
                    
                   
                </Card>
            )
        });
    }
}

export default JoinedPool
