import { FC, useState } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { FilterCheckbox } from '@gymbeam/services/repository/category/types';
import { CheckIsSelected, UpdateSelection } from '@gymbeam/components/Filter/types';
import { getFilterLabel } from '@gymbeam/helpers';

type CheckboxProps = {
    checkbox: FilterCheckbox;
    onClick: UpdateSelection;
    checkIsChecked: CheckIsSelected;
};

const Checkbox: FC<CheckboxProps> = ({ checkbox, onClick, checkIsChecked }) => {
    const { code, name, value, count } = checkbox;
    const [isChecked, setIsChecked] = useState(checkIsChecked(code, value));

    return (
        <FormControlLabel
            control={<MuiCheckbox checked={isChecked} />}
            onChange={() => {
                setIsChecked((value) => !value);
                onClick(code, value);
            }}
            label={getFilterLabel(name, count)}
        />
    );
};

export default Checkbox;
