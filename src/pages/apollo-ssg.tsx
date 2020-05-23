import App from '../apollo/App';
import InfoBox from '../apollo/InfoBox';
import Submit from '../apollo/Submit';
import PostList from '../apollo/PostList';
import { withApollo } from '../../lib/apollo';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';

const ClientOnlyPage = props => (
    <Layout>
        <Nav />
        <App>
            <InfoBox>
                ℹ️ This example shows how to disable apollos query fetching on
                the server. If you <a href="/client-only">reload</a> this page,
                you will see a loader since Apollo didn't fetch any data on the
                server. This allows{' '}
                <a
                    href="https://nextjs.org/blog/next-9#automatic-static-optimization"
                    target="_blank"
                    rel="noopener noreferrer">
                    automatic static optimization
                </a>
                .
            </InfoBox>
            <Submit />
            <PostList />
        </App>
    </Layout>
);

export default withApollo()(ClientOnlyPage);
