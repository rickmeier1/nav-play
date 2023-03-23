import Container from '@mui/material/Container';
import { Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Stack, Typography } from '@mui/material';
import Link from '../components/Link';

const robotoThin = Roboto({ subsets: ['latin'], weight: '100' });
const roboto = Roboto({ subsets: ['latin'], weight: '300' });
const robotoBlack = Roboto({ subsets: ['latin'], weight: '900' });

export const Index = () => {
  return (
    <>
      <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" className={robotoBlack.className}>
          DAG
        </Typography>
        <Typography variant="h4"  className={robotoThin.className} gutterBottom>
          DAG company landing page
        </Typography>
        <Typography variant='button'>
          <Stack spacing={2} sx={{ mx:4 }}>
            <Link href="/main">Open Main Page</Link>
            <Link href="/about">Go to the about page</Link>
          </Stack>
        </Typography>
      </Box>
    </Container>
  </>
  )
}

export default Index;
