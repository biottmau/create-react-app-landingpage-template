import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import siteTheme from '../style/siteTheme';
import Header from './Header';
import Content from './Content';
import { CssBaseline } from '@material-ui/core';
import Footer from './Footer';


function Layout() {

    return (
        <MuiThemeProvider theme={siteTheme}>
            <CssBaseline />
            <Header /> 
            <Content />
            <Footer />
        </MuiThemeProvider>
    );
}

export default Layout;