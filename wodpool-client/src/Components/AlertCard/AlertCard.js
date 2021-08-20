import React from 'react'
//MUI
import { Container } from '@material-ui/core';
//Assets
import {alertStyle} from './AlertStyle';

function AlertCard() {
    const classes = alertStyle()
    return (
        <Container className={classes.container}>
            <p>Welcome to WODPool Alpha Release. Please be patient as we continue to develop and improve the product around you. Feel free to use our Report Bug form to help us along!</p>
        </Container>
    )
}

export default AlertCard
