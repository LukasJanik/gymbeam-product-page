import { FC } from 'react';
import { CategoryData } from '@gymbeam/services/repository/category/types';
import { Typography } from '@mui/material';

type HeaderProps = Pick<CategoryData, 'totalNumberOfItems'>;

const Header: FC<HeaderProps> = ({ totalNumberOfItems }) => (
    <Typography ml="auto" pr={1} variant="subtitle1">
        Celkový počet výsledkov: {totalNumberOfItems}
    </Typography>
);

export default Header;
