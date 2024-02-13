import { FC } from 'react';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import { Box } from '@mui/material';
import SectionTitle from '../SectionTitle';
import Checkbox from './Checkbox';

type CheckboxProps = {
    checkboxes: CategoryFilters['checkboxes'];
};

const Checkboxes: FC<CheckboxProps> = ({ checkboxes }) => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <SectionTitle label="Filtrovať podľa"></SectionTitle>
            <Box display="flex" gap={1} flexWrap="wrap">
                {checkboxes.map((checkbox) => (
                    <Checkbox
                        checkbox={checkbox}
                        onClick={() => console.log('clicked')}
                        isSelected={false}
                        key={checkbox.code}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Checkboxes;
