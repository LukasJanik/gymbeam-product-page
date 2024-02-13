import { FC } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import Multiselects from '@gymbeam/components/Filter/Multiselects';
import Checkboxes from '@gymbeam/components/Filter/Checkboxes';
import Ranges from '@gymbeam/components/Filter/Ranges';

type FilterProps = {
    filters: CategoryFilters | undefined;
};

const Filter: FC<FilterProps> = ({ filters }) => {
    const { multiselects = [], checkboxes = [], ranges = [] } = filters ?? {};

    return (
        <Stack gap={2} py={3} divider={<Divider />}>
            <Typography variant="h4">Filter</Typography>
            <Multiselects multiselects={multiselects} />
            <Checkboxes checkboxes={checkboxes} />
            <Ranges ranges={ranges} />
        </Stack>
    );
};

export default Filter;
