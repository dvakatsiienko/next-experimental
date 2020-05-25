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

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
// MyDocument.getInitialProps = async ctx => {
// console.log(true);
// Resolution order
//
// On the server:
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. document.getInitialProps
// 4. app.render
// 5. page.render
// 6. document.render
//
// On the server with error:
// 1. document.getInitialProps
// 2. app.render
// 3. page.render
// 4. document.render
//
// On the client
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. app.render
// 4. page.render

// Render app and page and get the context of the page with collected side effects.
// const sheets = new ServerStyleSheets();
// const originalRenderPage = ctx.renderPage;

// ctx.renderPage = () =>
//   originalRenderPage({
//     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//   });

// const initialProps = await Document.getInitialProps(ctx);

// return {
// ...initialProps,
// Styles fragment is rendered after the app and page rendering finish.
// styles: [
// ...React.Children.toArray(initialProps.styles),
// sheets.getStyleElement(),
// ],
// };
// };
