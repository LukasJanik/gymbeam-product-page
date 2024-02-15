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

const CommonStateContainer = styled(Typography)<TypographyProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
}));

export default CommonState;
