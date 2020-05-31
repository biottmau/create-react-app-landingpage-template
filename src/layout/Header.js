import React, { useEffect, useState } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import siteStyles from '../style/siteStyles';



function Header() {
    const classes = siteStyles();
    const [styleBar, setStyleBar] = useState(false);

    /**
     * Cambio el estilo del appbar segpun el scroll
     */
    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset >= 10)
                setStyleBar(true);
            else
                setStyleBar(false);
        };
    }, []);

    return (
        <AppBar
            elevation={5}
            position="fixed"
            className={styleBar ? classes.appBarCommon : classes.appBar} >
            <Typography>En el header</Typography>
        </AppBar>


    );
}

export default Header;