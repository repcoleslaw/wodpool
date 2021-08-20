import React from 'react'
//MUI
import { Typography } from '@material-ui/core';

//ASSETS
import {useStyles} from '../../util/MakeStyles';

function MyPools(props) {
    const classes = useStyles();
    const pools = props.pools

    console.log(pools)
    return (
        <div>
            <Typography variant="h4">My Pools</Typography>
            This is the new My Pools component
        </div>
    )
}

export default MyPools
