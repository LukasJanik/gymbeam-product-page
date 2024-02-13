import { FC } from 'react';
import { Typography } from '@mui/material';

type SectionTitleProps = {
    children: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
    <Typography gutterBottom variant="h6">
        {children}
    </Typography>
);

export default SectionTitle;
