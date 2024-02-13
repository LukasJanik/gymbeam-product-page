import { FC, useState } from 'react';
import { Divider, Stack } from '@mui/material';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import Multiselects from './Multiselects';
import Checkboxes from './Checkboxes';
import Ranges from './Ranges';
import Header from './Header';

type FilterProps = {
    filters: CategoryFilters | undefined;
};

const Filter: FC<FilterProps> = ({ filters }) => {
    const { multiselects = [], checkboxes = [], ranges = [] } = filters ?? {};
    const [resetCounter, setResetCounter] = useState<number>(0);

    return (
        <>
            <Header onReset={() => setResetCounter((prevState) => prevState + 1)} />
            <Stack key={`${resetCounter}`} gap={2} py={3} divider={<Divider />}>
                <Multiselects multiselects={multiselects} />
                <Checkboxes checkboxes={checkboxes} />
                <Ranges ranges={ranges} />
            </Stack>
        </>
    );
};

export default Filter;
