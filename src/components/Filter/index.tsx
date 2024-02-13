import { FC } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import Multiselect from '@gymbeam/components/Filter/Multiselect';
import Checkboxes from '@gymbeam/components/Filter/Checkboxes';

type FilterProps = {
    filters: CategoryFilters | undefined;
};

const Filter: FC<FilterProps> = ({ filters }) => {
    const { multiselects = [], checkboxes = [], ranges = [] } = filters ?? {};

    return (
        <Stack gap={2} divider={<Divider />} py={3}>
            <Typography variant="h4">Filter</Typography>
            {multiselects.map((multiselect) => (
                <Multiselect {...multiselect} key={multiselect.code} />
            ))}
            <Checkboxes checkboxes={checkboxes} />
        </Stack>
    );
};

export default Filter;
