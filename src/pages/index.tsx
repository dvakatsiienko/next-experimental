/* Core */
import { NextPage } from 'next';

/* Components */
import { Layout, Nav } from '@/components';

const Home: NextPage = () => {
    return (
        <Layout>
            <Nav title = 'Home' />
        </Layout>
    );
};

export default Home;
