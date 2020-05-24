/* Core */
import React from 'react';
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

export default function About() {
    return (
        <Layout>
            <Nav />
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js example
                    </Typography>
                    {/*
                    // @ts-ignore */}
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        naked
                        href="/">
                        Go to the main page
                    </Button>
                    <ProTip />
                    <Copyright />
                </Box>
            </Container>
        </Layout>
    );
}
