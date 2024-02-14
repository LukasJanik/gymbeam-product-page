import { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

const Navbar: FC = () => (
    <Box flexGrow={1}>
        <AppBar position="static">
            <Toolbar>
                <img
                    src="https://gymbeam.sk/media/logo/websites/1/GB_Logo_Energy_SK_1.png"
                    height={48}
                    width="auto"
                    alt="logo"
                />
            </Toolbar>
        </AppBar>
    </Box>
);

export default Navbar;
