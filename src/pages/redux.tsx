/* Core */
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';
import Clock from '@/components/redux/Clock';
import Counter from '@/components/redux/Counter';

/* Instruments */
import useInterval from '@/lib/useInterval';
import { withRedux } from '@/lib/redux';

const ReduxPage: NextPage = () => {
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
        </Layout>
    );
};

export default withRedux(ReduxPage);
