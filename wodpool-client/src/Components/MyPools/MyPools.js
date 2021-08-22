import React from 'react'
//MUI
import { Typography } from '@material-ui/core';

//ASSETS
import {useStyles} from '../../util/MakeStyles';
import usePools from '../../Components/usePools';
//Components
import JoinedPool from './JoinedPool';

function MyPools(props) {
    const classes = useStyles();
    const us = usePools();

    const [isLoading, setLoading] = React.useState(true)

    React.useEffect(()=>{
        us.fetchWithHandle()
        setLoading(false)
    }, []);

    if (isLoading) {
       return(
           <div>Loading...</div>
       )
    } else {
        return us.hasPools() ?
        <div>
            <Typography variant='h5'> My Pools</Typography>
            <JoinedPool pools={us.pools}/>
        </div>
         :
        <div>
            <Typography variant='h5'>My Pools</Typography>
            <p>Oh, you don't seem to be in any pools. Let's check them out!</p>
        </div>
    }

   
    
}

export default MyPools
