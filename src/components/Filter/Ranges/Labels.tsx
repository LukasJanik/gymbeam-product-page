import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type LabelsProps = { min: number; max: number };

const Labels: FC<LabelsProps> = ({ min, max }) => (
    <Box display="flex" justifyContent="space-between">
        <Typography variant="body2">{min}</Typography>
        <Typography variant="body2">{max}</Typography>
    </Box>
);

export default Labels;
