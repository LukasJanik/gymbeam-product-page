import { FC } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FilterOption } from '@gymbeam/services/repository/category/types';

type OptionProps = {
    option: FilterOption;
    onClick: () => void;
    isSelected: boolean;
};

const Option: FC<OptionProps> = ({ option }) => {
    const { name, value, count } = option;

    return <FormControlLabel control={<Checkbox defaultChecked />} label={`${name} (${count})`} />;
};

export default Option;
