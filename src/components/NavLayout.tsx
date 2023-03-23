import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactElement, ReactNode } from 'react';
import { CopyrightFooter } from './Copyright';

interface Props {
    children?: ReactNode
}

export const NavLayout = ({ children }: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DAG Studios
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            {children}
            <CopyrightFooter />
        </Box>
    )
}

export const navLayout = (page: ReactElement) => {
    return (
        <NavLayout>
            {page}
        </NavLayout>
    )
  }