import { FC } from 'react';
import { Typography } from '@mui/material';

type SectionTitleProps = {
    label: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ label }) => (
    <Typography gutterBottom variant="h6">
        {label}
    </Typography>
);

export default SectionTitle;
