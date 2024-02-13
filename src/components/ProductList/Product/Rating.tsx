import { FC } from 'react';
import { Box, Rating as MuiRating, Typography } from '@mui/material';

type RatingProps = {
    value: number;
    reviewsCount: number;
};

const Rating: FC<RatingProps> = ({ value, reviewsCount }) => (
    <Box flexWrap="wrap" display="flex" gap={1} alignItems="center">
        <MuiRating value={(value / 100) * 5} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
            {value}% ({reviewsCount})
        </Typography>
    </Box>
);

export default Rating;
