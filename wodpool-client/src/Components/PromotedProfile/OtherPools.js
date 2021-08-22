import React from 'react'
//MUI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
//ASSETS
import {useStyles} from '../../util/MakeStyles';

//COMPONENTS
import usePools from '../../Components/usePools';
import PoolCard from '../../Components/PoolCard/PoolCard';
import { Info } from '@material-ui/icons';


function OtherPools(props) {
    const global = useStyles();
    const us = usePools();

    React.useEffect(()=>{
        us.fetchWithoutHandle();
    },[]);

    return(
        <Paper className={global.paper}>
            <Typography variant="h4">Available Pools</Typography>
            <Typography variant="caption" color="textSecondary">
                <Info className={global.infoIcon}/>
                There may be some upcoming pools we think you'd like to register for!
            </Typography>
            {us.hasPools() ? (
                <PoolCard pools={us.pools} />
            ) : (
                <div>
                    Looks like you've joined everything
                </div>
            )}
        </Paper>
    )
       
    }


export default OtherPools
