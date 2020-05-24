import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProTip from '@/components/material/ProTip';
import Link from '@/components/material/Link';
import Copyright from '@/components/material/Copyright';
import { Layout } from '@/components/Layout';
import { Nav } from '@/components/Nav';

export default function Index() {
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
                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                    <ProTip />
                    <Copyright />
                </Box>
            </Container>
        </Layout>
    );
}
