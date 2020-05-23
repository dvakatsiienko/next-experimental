/* Core */
import InfoBox from '@/apollo/InfoBox';
import Submit from '@/apollo/Submit';
import PostList from '@/apollo/PostList';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';

/* Instruments */
import { withApollo } from '@/lib/apollo';

const ApolloSSR = () => {
    return (
        <Layout>
            <Nav />
            <InfoBox>
                ℹ️ This example shows how to fetch all initial apollo queries on
                the server. If you <a href="/">reload</a> this page you won't
                see a loader since Apollo fetched all needed data on the server.
                This prevents{' '}
                <a
                    href="https://nextjs.org/blog/next-9#automatic-static-optimization"
                    target="_blank"
                    rel="noopener noreferrer">
                    automatic static optimization
                </a>{' '}
                in favour of full Server-Side-Rendering.
            </InfoBox>
            <Submit />
            <PostList />
        </Layout>
    );
};

export default withApollo({ ssr: true })(ApolloSSR);
