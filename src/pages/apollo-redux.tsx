/* Core */
import { useDispatch } from 'react-redux';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';
import Clock from '@/components/redux/Clock';
import Counter from '@/components/redux/Counter';
import Submit from '@/components/apollo/Submit';
import PostList from '@/components/apollo/PostList';

/* Instruments */
import { withApollo } from '@/lib/apollo';
import useInterval from '@/lib/useInterval';

const ApolloReduxPage = () => {
    // Tick the time every second
    const dispatch = useDispatch();

    useInterval(() => {
        dispatch({
            type: 'TICK',
            light: true,
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

import { withRedux } from '@/lib/redux';

export default withRedux(withApollo()(ApolloReduxPage));
