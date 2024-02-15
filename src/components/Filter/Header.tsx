import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, styled, Typography } from '@mui/material';

type HeaderProps = {
    onReset: () => void;
};

const Header: FC<HeaderProps> = ({ onReset }) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Typography variant="h4">Filter</Typography>
            <Button
                variant="outlined"
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing(1),
    padding: spacing(2, 3, 2, 0),
    marginRight: spacing(-3),
    position: 'sticky',
    top: 0,
    backgroundColor: palette.common.white,
    zIndex: 100,
}));

export default Header;
