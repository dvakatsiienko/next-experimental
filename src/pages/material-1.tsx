import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProTip from '@/material/ProTip';
import Link from '@/material/Link';
import Copyright from '@/material/Copyright';
import { Nav } from '@/components/Nav';

export default function Index() {
    return (
        <Container maxWidth="sm">
            <Nav />
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}
