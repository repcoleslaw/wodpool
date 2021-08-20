import React from 'react'
//MUI

//Assets
import {alertStyle} from './AlertStyle';

function AlertCard() {
    const classes = alertStyle()
    return (
        <div className={classes.container}>
            <p>Welcome to WODPool Alpha Release. Please be patient as we continue to develop and improve the product around you. Feel free to use our Report Bug form to help us along!</p>
        </div>
    )
}

export default AlertCard
