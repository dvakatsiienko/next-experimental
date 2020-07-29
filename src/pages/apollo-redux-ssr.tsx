/* Core */
import { NextPage, GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';
import Clock from '@/components/redux/Clock';
import Counter from '@/components/redux/Counter';
import Submit from '@/components/apollo/Submit';
import PostList from '@/components/apollo/PostList';

/* Instruments */
import * as gql from '@/graphql';
import { useInterval } from '@/hooks';
import { initApollo } from '@/lib/apollo';
import { allPostsQueryVars } from '@/components/apollo/PostList';

const ApolloReduxSSR: NextPage = () => {
    // Tick the time every second
    const dispatch = useDispatch();

    useInterval(() => {
        dispatch({
            type:       'TICK',
            light:      true,
            lastUpdate: Date.now(),
        });
    }, 1000);

    return (
        <Layout>
            <Nav />

            <Clock />
            <Counter />

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

export default ApolloReduxSSR;
