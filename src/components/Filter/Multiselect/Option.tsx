import { FC, useState } from 'react';
import { Button } from '@mui/material';
import { FilterOption } from '@gymbeam/services/repository/category/types';
import { CheckIsSelected, UpdateSelection } from '@gymbeam/components/Filter/Multiselect/types';

type OptionProps = {
    code: string;
    option: FilterOption;
    checkIsSelected: CheckIsSelected;
    onClick: UpdateSelection;
};

const Option: FC<OptionProps> = ({ code, option, checkIsSelected, onClick }) => {
    const { name, value, count } = option;
    const [isSelected, setIsSelected] = useState(checkIsSelected(code, value));

    return (
        <Button
            variant={isSelected ? 'contained' : 'outlined'}
            onClick={() => {
                setIsSelected((prevState) => !prevState);
                onClick(code, value);
            }}
        >
            {name} ({count})
        </Button>
    );
};

export default Option;
