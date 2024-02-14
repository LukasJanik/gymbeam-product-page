import { FC } from 'react';
import { Box, CircularProgress, styled } from '@mui/material';

type LoadingStateProps = {
    isLoading: boolean;
};
const LoadingState: FC<LoadingStateProps> = ({ isLoading }) =>
    isLoading ? (
        <LoadingStateContainer>
            <CircularProgress />
        </LoadingStateContainer>
    ) : null;

const LoadingStateContainer = styled(Box)(({ theme: { palette } }) => ({
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.grey[50],
    opacity: 0.7,
}));

export default LoadingState;
