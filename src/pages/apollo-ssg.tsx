/* Core */
import { NextPage } from 'next';

/* Components */
import { Layout, Nav } from '@/components';
import { Paragraph, Link } from '@/components/styled';
import { PostList, CreatePostForm } from '@/features/apollo';

const ApolloSSG: NextPage = () => {
    return (
        <Layout>
            <Nav title = 'Apollo SSG' />

            <Paragraph>
                ℹ️ This example shows how to disable apollos query fetching on
                the server. If you <Link href = '/client-only'>reload</Link> this
                page, you will see a loader since Apollo didn&apos;t fetch any
                data on the server. This allows{' '}
                <Link
                    href = 'https://nextjs.org/blog/next-9#automatic-static-optimization'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                >
                    automatic static optimization
                </Link>
                .
            </Paragraph>

            <CreatePostForm />
            <PostList />
        </Layout>
    );
};

export default ApolloSSG;
