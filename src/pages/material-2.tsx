/* Core */
import { NextPage } from 'next';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

/* Components */
import ProTip from '@/components/material/ProTip';
import Link from '@/components/material/Link';
import Copyright from '@/components/material/Copyright';
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';

const About: NextPage = () => {
    return (
        <Layout>
            <Nav />
            <Container maxWidth = 'sm'>
                <Box my = { 4 }>
                    <Typography gutterBottom component = 'h1' variant = 'h4'>
                        Next.js example
                    </Typography>
                    {/*
                    // @ts-ignore */}
                    <Button
                        naked
                        color = 'primary'
                        component = { Link }
                        href = '/'
                        variant = 'contained'
                    >
                        Go to the main page
                    </Button>
                    <ProTip />
                    <Copyright />
                </Box>
            </Container>
        </Layout>
    );
};

export default About;
