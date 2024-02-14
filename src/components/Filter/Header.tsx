import { FC } from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
    onReset: () => void;
};

const Header: FC<HeaderProps> = ({ onReset }) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Typography variant="h4">Filter</Typography>
            <Button
                onClick={() => {
                    navigate('./');
                    onReset();
                }}
            >
                Resetovať filter
            </Button>
        </HeaderContainer>
    );
};

const HeaderContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: spacing(2, 3, 0, 0),
    marginRight: spacing(-3),
    position: 'sticky',
    top: 0,
    backgroundColor: palette.common.white,
    zIndex: 100,
}));

export default Header;
