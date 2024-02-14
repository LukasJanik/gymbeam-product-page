import { FC } from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

type Common = {
    Icon: SvgIconComponent;
    label: string;
};

const CommonState: FC<Common> = ({ Icon, label }) => (
    <CommonStateContainer variant="h2" component="div">
        <Icon fontSize="inherit" />
        {label}
    </CommonStateContainer>
);

const CommonStateContainer = styled(Typography)<TypographyProps>(({ theme: { spacing } }) => ({
    display: 'flex',
    flex: '1 1 auto',
    gap: spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));

export default CommonState;
