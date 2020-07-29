/* Core */
import { NextPage } from 'next';
import styled from 'styled-components';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';

const Home: NextPage = () => {
    return (
        <Layout>
            <Nav />
            <H1>Home</H1>
        </Layout>
    );
};

const H1 = styled.h1`
    color: ${props => props.theme.palette.primary.main};
`;

export default Home;
