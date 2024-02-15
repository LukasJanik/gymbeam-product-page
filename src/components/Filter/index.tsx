import { FC, useState } from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { CategoryData } from '@gymbeam/services/repository/category/types';
import Multiselects from './Multiselects';
import Checkboxes from './Checkboxes';
import Ranges from './Ranges';
import Header from './Header';
import Drawer from './Drawer';

type FilterProps = Partial<Pick<CategoryData, 'filters'>>;

const Filter: FC<FilterProps> = ({ filters }) => {
    const { multiselects = [], checkboxes = [], ranges = [] } = filters ?? {};
    const [resetCounter, setResetCounter] = useState<number>(0);

    const { breakpoints } = useTheme();
    const matches = useMediaQuery(breakpoints.down('md'));

    const content = (
        <>
            <Header onReset={() => setResetCounter((prevState) => prevState + 1)} />
            <Stack key={`${resetCounter}`} gap={2} py={3}>
                <Multiselects multiselects={multiselects} />
                <Checkboxes checkboxes={checkboxes} />
                <Ranges ranges={ranges} />
            </Stack>
        </>
    );

    return matches ? <Drawer>{content}</Drawer> : content;
};

export default Filter;
