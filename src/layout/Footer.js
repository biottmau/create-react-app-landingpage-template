import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import siteStyles from '../style/siteStyles';
import { Footer as MuiFooter } from 'react-materialize';



function Footer() {
    const classes = siteStyles();


    return (
        <div className={classes.footer}>

        </div>

    );
}

export default Footer;