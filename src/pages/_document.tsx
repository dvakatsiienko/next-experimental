/* Core */
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheet } from '@material-ui/core/styles';

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentsStylesheet = new StyledServerStyleSheet();
        const muiStylesheet = new MuiServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: App => props => {
                        const styledSheetResult = styledComponentsStylesheet.collectStyles(
                            muiStylesheet.collect(<App { ...props } />),
                        );

                        return styledSheetResult;
                    },
                });
            };

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {styledComponentsStylesheet.getStyleElement()}
                        {muiStylesheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            styledComponentsStylesheet.seal();
        }
    }
}
