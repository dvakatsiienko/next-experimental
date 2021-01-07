/* Core */
import { NextPage, GetServerSideProps } from 'next';

/* Components */
import { Layout, Nav } from '@/components';
import { PostList, InfoBox, Submit } from '@/features/apollo';

/* Instruments */
import * as gql from '@/graphql';
import { initApollo } from '@/lib/apollo';
import { allPostsQueryVars } from '@/features/apollo';

const ApolloSSR: NextPage = () => {
    return (
        <Layout>
            <Nav title = 'Apollo SSR' />
            <InfoBox>
                ℹ️ This example shows how to fetch all initial apollo queries on
                the server. If you <a href = '/'>reload</a> this page you
                won&apos;t see a loader since Apollo fetched all needed data on
                the server. This prevents{' '}
                <a
                    href = 'https://nextjs.org/blog/next-9#automatic-static-optimization'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                >
                    automatic static optimization
                </a>{' '}
                in favour of full Server-Side-Rendering.
            </InfoBox>
            <Submit />
            <PostList />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const client = initApollo();

    await client.query({
        query:     gql.AllPostsDocument,
        variables: allPostsQueryVars,
    });

    return {
        props: {
            initialApolloState: client.cache.extract(),
        },
    };
};

export default ApolloSSR;
