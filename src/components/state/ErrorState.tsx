import { FC } from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorState: FC = () => (
    <ErrorStateContainer variant="h1" component="div">
        <ErrorIcon fontSize="inherit" />
        Nastala chyba
    </ErrorStateContainer>
);

const ErrorStateContainer = styled(Typography)<TypographyProps>(({ theme: { spacing } }) => ({
    display: 'flex',
    flex: '1 1 auto',
    gap: spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));

export default ErrorState;
