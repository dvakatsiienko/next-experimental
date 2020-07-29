/* Core */
import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as MuiProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

/* Instruments */
import { theme } from '@/theme/material-ui';
import { useStore } from '@/lib/redux';
import { useApollo } from '@/lib/apollo';

const App = props => {
    const store = useStore(props.pageProps.initialReduxState);
    const apolloClient = useApollo(props.pageProps.initialApolloState);

    // ? Remove Material UI styles injected during ssr stage.
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');

        jssStyles?.parentElement.removeChild(jssStyles);
    }, []);

    return (
        <ApolloProvider client = { apolloClient }>
            <ReduxProvider store = { store }>
                <MuiProvider theme = { theme }>
                    <StyledComponentsProvider theme = { theme }>
                        <Head>
                            <link href = '/favicon.ico' rel = 'icon' />
                            <title>Next Experimental</title>
                            <link
                                href = '/nprogress.css'
                                rel = 'stylesheet'
                                type = 'text/css'
                            />
                        </Head>
                        <props.Component { ...props.pageProps } />
                    </StyledComponentsProvider>
                </MuiProvider>
            </ReduxProvider>
        </ApolloProvider>
    );
};

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default App;
