/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';
import InfoBox from '@/components/apollo/InfoBox';
import Submit from '@/components/apollo/Submit';
import PostList from '@/components/apollo/PostList';

/* Instruments */
import { withApollo } from '@/lib/apollo';

const ApolloSSG = () => {
    return (
        <Layout>
            <Nav />
            <InfoBox>
                ℹ️ This example shows how to disable apollos query fetching on
                the server. If you <a href = '/client-only'>reload</a> this page,
                you will see a loader since Apollo didn't fetch any data on the
                server. This allows{' '}
                <a
                    href = 'https://nextjs.org/blog/next-9#automatic-static-optimization'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                >
                    automatic static optimization
                </a>
                .
            </InfoBox>
            <Submit />
            <PostList />
        </Layout>
    );
};

// export default compose(withApollo(), withRedux)(ApolloSSG);
export default withApollo(ApolloSSG);
