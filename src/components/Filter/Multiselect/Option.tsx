import { FC } from 'react';
import { Button } from '@mui/material';
import { FilterOption } from '@gymbeam/services/repository/category/types';

type OptionProps = {
    option: FilterOption;
    isSelected: boolean;
    onClick: () => void;
};

const Option: FC<OptionProps> = ({ option, isSelected, onClick }) => {
    const { name, count } = option;

    return (
        <Button variant={isSelected ? 'contained' : 'outlined'}>
            {name} ({count})
        </Button>
    );
};

export default Option;
