/* Core */
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';
import Clock from '@/redux/Clock';
import Counter from '@/redux/Counter';

/* Instruments */
import useInterval from '@/lib/useInterval';
import { wrapper } from '@/lib/store';

const ReduxPage: NextPage = () => {
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
        </Layout>
    );
};

// export const getServerSideProps = wrapper.getServerSideProps(context => {
//     const { dispatch } = context.store;

//     dispatch({ type: 'TICK', payload: 'was set in other page' });
//     dispatch({
//         type: 'TICK',
//         light: typeof window === 'object',
//         lastUpdate: Date.now(),
//     });

//     return {};
// });

// ReduxPage.getInitialProps = context => {
//     const { dispatch } = context.store;

//     dispatch({ type: 'TICK', payload: 'was set in other page' });
//     dispatch({
//         type: 'TICK',
//         light: typeof window === 'object',
//         lastUpdate: Date.now(),
//     });

//     return {};
// };

import { withRedux } from '@/lib/redux';

export default withRedux(ReduxPage);
