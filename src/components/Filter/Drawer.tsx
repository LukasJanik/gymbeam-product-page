import { FC, ReactNode, useState } from 'react';
import { Box, Button, Drawer as MuiDrawer } from '@mui/material';

type DrawerProps = {
    children: ReactNode;
};

const Drawer: FC<DrawerProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Box mt={3} display="flex" justifyContent="center">
            <Button variant="contained" onClick={() => setIsOpen(true)}>Zobraziť filtre</Button>
            <MuiDrawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
                <Box px={3}>{children}</Box>
            </MuiDrawer>
        </Box>
    );
};

export default Drawer;
