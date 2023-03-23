import { Typography, Box, Container } from '@mui/material';
import Link from './Link';

export const CopyrightText = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.dag-studios.com/">
                DAG Studios
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const CopyrightFooter = (props: any) => {
    return (
        <Box component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm" disableGutters>
                <CopyrightText />
            </Container>
        </Box>
    );
}
