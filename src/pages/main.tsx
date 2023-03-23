import { NextPageWithLayout } from "./_app"
import { Box, Typography } from "@mui/material";
import { navLayout } from '../components/NavLayout';
import Link from '../components/Link';

// The contents of this page are put here
const MainPage: NextPageWithLayout = () => {
    return (
        <Box>
          <Typography variant="h3">Interesting stuff goes here</Typography>
          <Typography variant="button">
              <Link href="/profile">See Users profile</Link>
          </Typography>
        </Box>
    );
}

// This will cause the MainPage to use the navLayout
MainPage.getLayout = navLayout;

export default MainPage;