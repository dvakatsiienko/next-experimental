/* Core */
import Head from 'next/head';

export const Layout: React.FC = props => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Next Experimental</title>
            </Head>
            <main>{props.children}</main>
        </>
    );
};
