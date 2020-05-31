import React from 'react';
import { MuiThemeProvider, Typography } from '@material-ui/core';
import siteTheme from '../style/siteTheme';
import siteStyles from '../style/siteStyles';
import Land from './sections/land/Land';
import Bio from './sections/bio/Bio';

function Content() {
    return (
        <MuiThemeProvider theme={siteTheme}>
            <Land />
            <Bio />
        </MuiThemeProvider>
    );
}

export default Content;