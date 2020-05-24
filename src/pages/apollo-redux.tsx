/* Core */
import { useDispatch } from 'react-redux';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';
import Clock from '@/redux/Clock';
import Counter from '@/redux/Counter';
import Submit from '@/apollo/Submit';
import PostList from '@/apollo/PostList';

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
