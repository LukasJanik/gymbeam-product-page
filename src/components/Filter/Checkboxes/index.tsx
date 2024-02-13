import { FC } from 'react';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import { Box } from '@mui/material';
import SectionTitle from '../SectionTitle';
import Checkbox from './Checkbox';
import useHandleCheckboxParams from '@gymbeam/components/Filter/Checkboxes/useHandleCheckboxParams';

type CheckboxProps = {
    checkboxes: CategoryFilters['checkboxes'];
};

const Checkboxes: FC<CheckboxProps> = ({ checkboxes }) => {
    const [checkIsChecked, updateValue] = useHandleCheckboxParams();

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <SectionTitle label="Filtrovať podľa"></SectionTitle>
            <Box display="flex" gap={1} flexWrap="wrap">
                {checkboxes.map((checkbox) => (
                    <Checkbox
                        checkbox={checkbox}
                        onClick={updateValue}
                        checkIsChecked={checkIsChecked}
                        key={checkbox.code}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Checkboxes;
