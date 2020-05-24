/* Core */
import NextApp from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider as MuiProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

/* Instruments */
import { theme } from '@/theme/material-ui';

class App extends NextApp {
    // ? Remove Material UI styles injected during ssr stage.
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        jssStyles?.parentElement.removeChild(jssStyles);
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <MuiProvider theme={theme}>
                <StyledComponentsProvider theme={theme}>
                    <Head>
                        <link rel="icon" href="/favicon.ico" />
                        <title>Next Experimental</title>
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="/nprogress.css"
                        />
                    </Head>
                    <Component {...pageProps} />
                </StyledComponentsProvider>
            </MuiProvider>
        );
    }
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default App;
