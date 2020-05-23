/* Core */
import NextApp from 'next/app';
import { ThemeProvider as MuiProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

/* Instruments */
import { theme } from '@/material/theme';

export default class extends NextApp {
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
                    <Component {...pageProps} />
                </StyledComponentsProvider>
            </MuiProvider>
        );
    }
}
