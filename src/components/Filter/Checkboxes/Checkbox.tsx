import { FC } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { FilterCheckbox } from '@gymbeam/services/repository/category/types';

type CheckboxProps = {
    checkbox: FilterCheckbox;
    onClick: () => void;
    isSelected: boolean;
};

const Checkbox: FC<CheckboxProps> = ({ checkbox }) => {
    const { name, value, count } = checkbox;

    return <FormControlLabel control={<MuiCheckbox defaultChecked />} label={`${name} (${count})`} />;
};

export default Checkbox;
