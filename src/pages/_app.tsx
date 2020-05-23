/* Core */
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as MuiProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';

/* Instruments */
import { theme } from '@/material/theme';

export default (props: AppProps) => {
    // ? Remove Material UI styles injected during ssr stage.
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <MuiProvider theme={theme}>
            <StyledComponentsProvider theme={theme}>
                <props.Component {...props.pageProps} />
            </StyledComponentsProvider>
        </MuiProvider>
    );
};
