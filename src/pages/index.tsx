/* Core */
import styled from 'styled-components';

/* Components */
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';

export default function Home() {
    return (
        <Layout>
            <Nav />
            <H1>Index</H1>
        </Layout>
    );
}

const H1 = styled.h1`
    color: ${props => props.theme.palette.primary.main};
`;
